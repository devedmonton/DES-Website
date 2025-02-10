import { google } from 'googleapis'
import { JWT } from 'google-auth-library'

/**
 * Creates an authenticated JWT client for accessing Google APIs.
 *
 * @function createAuthClient
 * @param {Object} serviceAccountCredentials - The service account credentials used for authentication.
 * @param {string} serviceAccountCredentials.client_email - The client email associated with the service account.
 * @param {string} serviceAccountCredentials.private_key - The private key associated with the service account.
 * @returns {JWT} - A JWT client authenticated with the provided credentials and configured with the necessary scopes.
 */
const createAuthClient = (serviceAccountCredentials) => {
  const client = new JWT({
    email: serviceAccountCredentials.client_email,
    key: serviceAccountCredentials.private_key,
    scopes: [ // set the right scope
      'https://www.googleapis.com/auth/calendar',
      'https://www.googleapis.com/auth/calendar.events',
    ],
  })
  return client
}

/**
 * Retrieves events from Google Calendar.
 * @async
 * @param {Object} options - The options object.
 * @param {string} options.googleCalendarId - The ID of the Google Calendar should be an email.
 * @param {Object} options.serviceAccountCredentials - The service account credentials for google authentication.
 * @param {Date} options.startDate - The start date from which to retrieve events.
 * @param {number} options.limitEvents - The maximum number of events to retrieve.
 * @returns {Promise<Array>} An array of events.
 */
export const getEvents = async ({
  googleCalendarId,
  serviceAccountCredentials,
  startDate,
  limitEvents,
}) => {
  if (!startDate) {
    startDate = new Date().toISOString()
  }
  else {
    startDate = new Date(startDate).toISOString()
  }

  if (!limitEvents) {
    limitEvents = 100
  }

  // get the credentials from the service account
  const client = createAuthClient(serviceAccountCredentials)

  // get the calendar api using google
  const calendar = google.calendar({ version: 'v3' })
  // get the events from the calendar
  const resposnse = await calendar.events.list({
    auth: client,
    calendarId: googleCalendarId,
    timeMin: startDate,
    maxResults: limitEvents,
    singleEvents: true,
    orderBy: 'startTime',
  })

  // return the events.
  return resposnse.data.items
}
/**
 * Creates new events in the Google Calendar.
 * @async
 * @param {Object} options - The options object.
 * @param {string} options.googleCalendarId - The ID of the Google Calendar should be an email.
 * @param {Object} options.serviceAccountCredentials - The service account credentials for google authentication.
 * @param {Array<Object>} newEvents - The new events to be created.
 * @throws {ImportCalendarException} - Thrown if there is an error while creating events in the Google Calendar.
 * @returns {Promise<void>} - Resolves when all are created.
 */
export const createAllEvents = async ({
  googleCalendarId,
  serviceAccountCredentials,
  newEvents,
}) => {
  // get the credentials from the service account
  const client = createAuthClient(serviceAccountCredentials)

  // // get the calendar api using google
  const calendar = google.calendar({ version: 'v3' })// get the credentials from the service account

  try {
    // Map each event to a calendar.events.insert call
    const insertCalendarPromises = newEvents.map((event) => {
      return calendar.events.insert({
        auth: client,
        calendarId: googleCalendarId,
        resource: event,
      })
    })
    // log the created events
    const responses = await Promise.all(insertCalendarPromises)
    responses.forEach(() => {
      console.log(`Event created Successfully!`)
    })
  }
  catch (error) {
    console.error('Error creating events:', error.message)
    throw new ImportCalendarException({
      message: 'Error creating events in Gmail',
      error: 'A gmail API error has occurred.',
    })
  }
}
