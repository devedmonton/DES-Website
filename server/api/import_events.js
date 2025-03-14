import fetch from 'node-fetch'
import ICAL from 'ical.js'

import { ImportCalendarException, getEvents, createAllEvents } from '../serverUtilities/calendar'

/*
A short explanation about this gargantuan file/function.
Essentially this just pulls some icals from the calendars in meetup in the
ICAL_URLS link and
(say here https://www.meetup.com/edmontonunlimited/events/ under "events" click
"Calendar" and there's a "ical" link next to "Subscribe to a feed of this calendar:")

The function "importAndProcessExternalEvents" is the important one here
look pretty far at the bottom and goes through 4 steps.
  Step: 1 Import the events from meetup
  Step: 2: Get all of the Events in the GMAIL Calendar
  Step: 3: Identify new Events (that aren't already in the calendar)
  Step: 4: Create the new Events in gmail (doesn't make duplicates)

It just returns ONLY THE NEWLY created events which I thought made sense here.

I'll add this to a nuxt cron here so that we can pull these nightly.
https://github.com/hywax/nuxt-cron
*/

const ICAL_URLS = [
  'https://www.meetup.com/edmontonunlimited/events/ical/', // Edmonton unlimited
  'https://www.meetup.com/GDG-Cloud-Edmonton/events/ical/', // GDG cloud
  'http://api.lu.ma/ics/get?entity=calendar&id=cal-N0bfLPnGQ1LC86P', // Leetnight
  'https://www.meetup.com/Edmonton-NET-User-Group/events/ical/', // .NET user group
  'https://www.meetup.com/flutter-edmonton/events/ical/', // flutter edmonton
  'https://www.meetup.com/edmonton-wordpress-meetup-group/events/ical/', // wordpress meetup
]

// gets the ICAL from the urls above.
const fetchICALFromURL = async (url) => {
  const response = await fetch(url, {
    headers: {
      'User-Agent': 'Mozilla/5.0 (Node.js Fetch)',
    },
  })
  if (!response.ok) {
    throw new Error(`Failed to fetch ICS file: ${response.statusText}`)
  }
  return response.text()
}

// converts the ICAL data to google calendar events.
const parseICALData = (icalContent) => {
  const icalData = ICAL.parse(icalContent) // Parse the ICAL content into jCal format
  const component = new ICAL.Component(icalData) // Create an ICAL.Component
  const events = component.getAllSubcomponents('vevent') // Get all VEVENT components

  // Map VEVENT components to Google Calendar API event objects
  return events.map((event) => {
    const vevent = new ICAL.Event(event)

    // this is getting the URL of the meetup link and saving it
    // to the location value of the event.
    // See issue 467 for why.
    let location = vevent.component.getFirstPropertyValue('url')
    // put this in the format of a google calendar event.
    return {
      summary: vevent.summary || 'No Title',
      description: vevent.description || '',
      location: location || '',
      start: {
        dateTime: vevent.startDate.toJSDate().toISOString(),
        timeZone: 'UTC', // Adjust as necessary
      },
      end: {
        dateTime: vevent.endDate.toJSDate().toISOString(),
        timeZone: 'UTC', // Adjust as necessary
      },
    }
  })
}

// gets all of the external events from all ICAL sources and combines
// into one large list.
const getAllExternalEvents = async () => {
  console.log('parsing ics')
  let allExternalEvents = []

  for (let url of ICAL_URLS) {
    console.log(`importing from ${url}...`)
    try {
      let icsText = await fetchICALFromURL(url)
      let externalEvents = parseICALData(icsText)

      // only get future events, because the gmail api only gets future events
      let futureExternalEvents = externalEvents.filter((externalEvent) => {
        let today = new Date()
        let eventDate = new Date(externalEvent.start.dateTime)
        return eventDate > today
      })
      // add all of the events
      allExternalEvents = [...futureExternalEvents, ...allExternalEvents]
      console.log('importing successful')
      console.log('-------------------')
    }
    catch (error) {
      console.log(`error while importing ${url}... skipping...`)
      console.log(error)
    }
  }
  return allExternalEvents
}

// gets the existing events from the calendar here.
const getExistingEvents = async ({ googleCalendarId, serviceAccountCredentials }) => {
  // try parse the events or throw an error
  try {
    console.log('Importing internal events from Devedmonton gmail calendar')
    const events = await getEvents({
      googleCalendarId,
      serviceAccountCredentials,
      limitEvents: 100,
    })
    // return the events
    return events
  }
  catch {
    throw new ImportCalendarException({
      message: 'Error Fetching Events',
      error: 'Could not fetch events',
    })
  }
}

/*
Compares existing gmail events and imported events based on date and title.
This only returns new events in the calendar.
*/
const compareAndGetNewEvents = (existingGmailEvents, importedEvents) => {
  // check if the importedEvents are in the newEvents
  const newEvents = importedEvents.filter((importedEvent) => {
    // check if the event is already in there
    // check with the title and the start date (I'm assuming there won't be two the same)
    const importedEventDateOnly = new Date(importedEvent.start.dateTime).toISOString().split('T')[0]
    return !existingGmailEvents.some((existingEvent) => {
      const existingDateOnly = new Date(existingEvent.start.dateTime).toISOString().split('T')[0]
      return (
        importedEvent.summary.toLowerCase().trim() === existingEvent.summary.toLowerCase().trim() // summary is title for gmail
        && importedEventDateOnly === existingDateOnly
      )
    })
  })
  return newEvents
}

export const importAndProcessExternalEvents = async ({ googleCalendarId, serviceAccountCredentials }) => {
  // Step: 1 Import the events from meetup
  let importedEvents = await getAllExternalEvents()
  // Step: 2: Get all of the Events in the GMAIL Calendar
  const existingEvents = await getExistingEvents({
    googleCalendarId,
    serviceAccountCredentials,
  })
  // Step: 3: Identify New Events
  let newEvents = compareAndGetNewEvents(
    existingEvents,
    importedEvents,
  )
  // Step: 4: Create the new Events in gmail
  // Step 4.2 create all of them events.
  try {
    await createAllEvents({
      googleCalendarId,
      serviceAccountCredentials,
      newEvents,
    })
  }
  catch {
    throw new ImportCalendarException({
      message: 'Error while creating events',
      error: 'Google calendar api error.',
    })
  }

  // return the new events
  return newEvents
}

// this is the api.
export default defineEventHandler(async (event) => {
  // get the credentials from the service account
  const { googleCalendarId, serviceAccountCredentialsJSON } = useRuntimeConfig(event).googleCalendarAPI
  let serviceAccountCredentials
  try {
    serviceAccountCredentials = JSON.parse(serviceAccountCredentialsJSON)
  }
  catch {
    throw new ImportCalendarException({
      message: 'No Service Account Credentials Provided',
      error: 'Service Account Credentials are not provided',
    })
  }
  let newEvents
  try {
    newEvents = await importAndProcessExternalEvents({ googleCalendarId, serviceAccountCredentials })
  }
  catch (error) {
    if (error instanceof ImportCalendarException) {
      throw createError({
        statusCode: 400,
        statusMessage: 'Bad Request',
        message: error.message,
        error: error.error,
      })
    }
    else {
      throw createError({
        statusCode: 500,
        statusMessage: 'Internal Server Error',
        message: 'Error while importing events',
        error: error.message,
      })
    }
  }
  return {
    statusCode: 200,
    statusMessage: 'Success',
    message: 'Events imported successfully, new Events added below',
    events: newEvents,
  }
})
