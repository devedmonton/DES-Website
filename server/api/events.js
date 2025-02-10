import { getEvents } from '../serverUtilities/calendar'

/*
Reference for folks who maybe curious.
- The google calendar id of the user you want to follow the events.
  - Refer to here https://it.umn.edu/services-technologies/how-tos/google-calendar-find-your-google#:~:text=Click%20on%20the%20three%20vertical,will%20find%20your%20Calendar%20ID.
- A service account
  - Refer to here https://dev.to/pedrohase/create-google-calender-events-using-the-google-api-and-service-accounts-in-nodejs-22m8
- The google calendar user needs to give the "Make Changes to Events" permissions to the service account
  - Refer to here https://dev.to/pedrohase/create-google-calender-events-using-the-google-api-and-service-accounts-in-nodejs-22m8
*/

export default defineEventHandler(async (event) => {
  // get the query params

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
