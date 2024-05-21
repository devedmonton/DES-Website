import { google } from 'googleapis'
import { JWT } from 'google-auth-library'

/*
Reference for folks who maybe curious.
- The google calendar id of the user you want to follow the events.
  - Refer to here https://it.umn.edu/services-technologies/how-tos/google-calendar-find-your-google#:~:text=Click%20on%20the%20three%20vertical,will%20find%20your%20Calendar%20ID.
- A service account
  - Refer to here https://dev.to/pedrohase/create-google-calender-events-using-the-google-api-and-service-accounts-in-nodejs-22m8
- The google calendar user needs to give the "Make Changes to Events" permissions to the service account
  - Refer to here https://dev.to/pedrohase/create-google-calender-events-using-the-google-api-and-service-accounts-in-nodejs-22m8
*/

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
const getEvents = async ({
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
    limitEvents = 10
  }

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
 * API endpoint for fetching events for DES.
 * @param {Object} event - The event object.
 * @param {string} startDate - Start date of the events you want to fetch (query param).
 * @param {number} limitEvents - Limit the number of events to fetch (query param)
 * @example
 * // Example usage:
 * // GET /api/events?startDate=2024-05-01&limitEvents=25
 * // GET /api/events
 */
// eslint-disable-next-line
export default defineEventHandler(async (event) => {
  // get the query params
  // eslint-disable-next-line
  const { startDate, limitEvents } = getQuery(event)

  // get the credentials from the service account
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

  try {
    const events = await getEvents({
      googleCalendarId,
      serviceAccountCredentials,
      startDate,
      limitEvents,
    })

    // working version.
    return {
      statusCode: 200,
      statusMessage: 'Success',
      message: 'Events fetched successfully',
      events,
    }
  }
  catch {
    throw createError({
      statusCode: 400,
      statusMessage: 'Bad Request',
      message: 'Invalid Request to the Calendar API',
    })
  }
})
