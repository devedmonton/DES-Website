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
 * Creates or updates events in the Google Calendar.
 *
 * Uses `events.import` rather than `events.insert` so the supplied iCalUID is
 * honored. This gives us two benefits:
 *  - Events get a stable identifier matching the source feed's UID, so future
 *    cron runs can dedup correctly.
 *  - If an event with the same iCalUID already exists, it is updated in
 *    place — so renames or time changes in the upstream feed propagate
 *    instead of creating duplicates.
 *
 * Events without an iCalUID fall through to events.insert (legacy path).
 *
 * @async
 * @param {Object} options - The options object.
 * @param {string} options.googleCalendarId - The ID of the Google Calendar should be an email.
 * @param {Object} options.serviceAccountCredentials - The service account credentials for google authentication.
 * @param {Array<Object>} options.newEvents - The events to be created or updated.
 * @throws {ImportCalendarException} - Thrown if there is an error while writing to the calendar.
 * @returns {Promise<void>} - Resolves when all writes complete.
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
    const writePromises = newEvents.map((event) => {
      // events.import requires iCalUID and dedups by it. Use it whenever the
      // source feed gave us one; fall back to insert for any legacy event
      // without a UID (e.g. manually created entries).
      if (event.iCalUID) {
        return calendar.events.import({
          auth: client,
          calendarId: googleCalendarId,
          resource: event,
        })
      }
      return calendar.events.insert({
        auth: client,
        calendarId: googleCalendarId,
        resource: event,
      })
    })
    const responses = await Promise.all(writePromises)
    responses.forEach(() => {
      console.log(`Event written Successfully!`)
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
