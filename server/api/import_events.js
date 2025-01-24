import fetch from 'node-fetch'
import ICAL from 'ical.js'

import { google } from 'googleapis'
import { JWT } from 'google-auth-library'

import { getEvents } from './events'

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

    // put this in the format of a google calendar event.
    return {
      summary: vevent.summary || 'No Title',
      description: vevent.description || '',
      location: vevent.location || '',
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
      let data = parseICALData(icsText)
      // add all of the events
      allExternalEvents = [...data, ...allExternalEvents]
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
const getExistingEvents = async (event) => {
  const { googleCalendarId, serviceAccountCredentialsJSON } = useRuntimeConfig(event).googleCalendarAPI
  let serviceAccountCredentials = {}
  // try to parse the service account credentials or throw an error.
  try {
    serviceAccountCredentials = JSON.parse(serviceAccountCredentialsJSON)
  }
  catch {
    throw createError({
      statusCode: 400,
      statusMessage: 'Bad Request',
      message: 'No Service Account Credentials Provided',
      error: 'Service Account Credentials are not provided',
    })
  }
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
    throw createError({
      statusCode: 400,
      statusMessage: 'Bad Request',
      message: 'Error Fetching Events',
      error: 'Could not fetch events',
    })
  }
}

const compareAndGetNewEvents = (existingGmailEvents, importedEvents) => {
  // check if the importedEvents are in the newEvents
  const newEvents = importedEvents.filter((importedEvent) => {
    // check if the event is already in there
    // check with the title and the start date (I'm assuming there won't be two the same)
    const importedEventDateOnly = new Date(importedEvent.start.dateTime).toISOString().split('T')[0]
    return !existingGmailEvents.some((existingEvent) => {
      const existingDateOnly = new Date(existingEvent.start.dateTime).toISOString().split('T')[0]
      return (
        importedEvent.summary.trim() === existingEvent.summary.trim() // summary is title for gmail
        && importedEventDateOnly === existingDateOnly
      )
    })
  })

  return newEvents
}

/*
  Note: there's a bit of duplication here from the "getEvents code"
  this is a great opportunity for a refactor and a contribution but
  in full transparency I just want to get this working.
*/
const createAllEvents = async ({
  googleCalendarId,
  serviceAccountCredentials,
  newEvents,
}) => {
  // get the credentials from the service account
  const client = new JWT({
    email: serviceAccountCredentials.client_email,
    key: serviceAccountCredentials.private_key,
    scopes: [ // set the right scope
      'https://www.googleapis.com/auth/calendar',
      'https://www.googleapis.com/auth/calendar.events',
    ],
  })
  // get the calendar api using google
  const calendar = google.calendar({ version: 'v3' })// get the credentials from the service account

  try {
    // Map each event to a calendar.events.insert call
    const insertCalendarPromises = newEvents.map((event) => {
      calendar.events.insert({
        auth: client,
        calendarId: googleCalendarId,
        resource: event,
      })
    })
    // log the created events
    const responses = await Promise.all(insertCalendarPromises)
    responses.forEach((response) => {
      console.log(`Event created:`, response.data.htmlLink)
    })
  }
  catch (error) {
    console.error('Error creating events:', error.message)
  }
}

const importAndProcessExternalEvents = async (event) => {
  // Step: 1 Import the events from meetup
  let importedEvents = await getAllExternalEvents()
  // Step: 2: Get all of the Events in the GMAIL Calendar
  const existingEvents = await getExistingEvents(event)
  // Step: 3: Identify New Events
  let newEvents = compareAndGetNewEvents(
    existingEvents,
    importedEvents,
  )
  // Step: 4: Create the new Events in gmail
  // Step: 4.1 get the credentials from the service account
  const { googleCalendarId, serviceAccountCredentialsJSON } = useRuntimeConfig(event).googleCalendarAPI
  let serviceAccountCredentials
  try {
    serviceAccountCredentials = JSON.parse(serviceAccountCredentialsJSON)
  }
  catch {
    throw createError({
      statusCode: 400,
      statusMessage: 'Bad Request',
      message: 'No Service Account Credentials Provided',
      error: 'Service Account Credentials are not provided',
    })
  }
  // Step 4.2 create all of them events.
  try {
    await createAllEvents({
      googleCalendarId,
      serviceAccountCredentials,
      newEvents,
    })
  }
  catch (error) {
    console.log(error)
    throw createError({
      statusCode: 400,
      statusMessage: 'Bad Request',
      message: 'Error while creating events',
      error: 'Google calendar api error.',
    })
  }

  // return the new events
  return newEvents
}

// this is the api.
export default defineEventHandler(async (event) => {
  const newEvents = await importAndProcessExternalEvents(event)
  return {
    statusCode: 200,
    statusMessage: 'Success',
    message: 'Events imported successfully, new Events added below',
    events: newEvents,
  }
})
