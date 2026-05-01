import { google } from 'googleapis'
import { JWT } from 'google-auth-library'

export class ImportCalendarException extends Error {
  constructor({ message, error }) {
    super(message) // Call the parent class constructor
    this.message = message
    this.error = error
    this.timestamp = new Date() // Add custom properties if needed
  }
}

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
 *
 * When `startDate` is omitted, no `timeMin` filter is applied and ALL events
 * (past and future) are returned. When `limitEvents` is omitted, pagination is
 * used to fetch every page until exhausted; otherwise the call is capped to
 * `limitEvents` results in a single page.
 *
 * @async
 * @param {Object} options - The options object.
 * @param {string} options.googleCalendarId - The ID of the Google Calendar should be an email.
 * @param {Object} options.serviceAccountCredentials - The service account credentials for google authentication.
 * @param {Date|string} [options.startDate] - Optional lower bound; if omitted, past events are also returned.
 * @param {number} [options.limitEvents] - Optional cap; if omitted, all events are fetched via pagination.
 * @returns {Promise<Array>} An array of events.
 */
export const getEvents = async ({
  googleCalendarId,
  serviceAccountCredentials,
  startDate,
  limitEvents,
}) => {
  // Only set timeMin when an explicit startDate is provided. Without it, the
  // Calendar API returns all events (past + future).
  const timeMin = startDate ? new Date(startDate).toISOString() : undefined

  // When the caller doesn't cap results, paginate through every page so the
  // full history is returned. Google's per-page hard limit is 2500.
  const shouldPaginate = !limitEvents
  const pageSize = limitEvents ?? 2500

  // get the credentials from the service account
  const client = createAuthClient(serviceAccountCredentials)

  // get the calendar api using google
  const calendar = google.calendar({ version: 'v3' })

  const baseParams = {
    auth: client,
    calendarId: googleCalendarId,
    maxResults: pageSize,
    singleEvents: true,
    orderBy: 'startTime',
    ...(timeMin ? { timeMin } : {}),
  }

  const allItems = []
  let pageToken

  do {
    const response = await calendar.events.list({
      ...baseParams,
      ...(pageToken ? { pageToken } : {}),
    })

    if (response.data.items) {
      allItems.push(...response.data.items)
    }

    pageToken = shouldPaginate ? response.data.nextPageToken : undefined
  } while (pageToken)

  return allItems
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

  // get the calendar api using google
  const calendar = google.calendar({ version: 'v3' })

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
