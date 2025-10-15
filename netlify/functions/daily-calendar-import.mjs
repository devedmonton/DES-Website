/*
To those who are curious: https://docs.netlify.com/functions/scheduled-functions/
This is a scheduled function that hits the import events api daily.
*/
export default async function () {
  const IMPORT_ENDPOINT = 'https://devedmonton.com/api/import_events'

  try {
    const response = await fetch(IMPORT_ENDPOINT, {
      method: 'GET',
    })

    const data = await response.json()

    console.log(`${IMPORT_ENDPOINT} response:`, data)

    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Request sent successfully', data }),
    }
  }
  catch (error) {
    console.error(`Error hitting ${IMPORT_ENDPOINT}:`, error)

    return {
      statusCode: 500,
      body: JSON.stringify({ error: `Failed to hit ${IMPORT_ENDPOINT}`, details: error.message }),
    }
  }
}

// this should fix the schedule to be daily
// run at 0 0 * * *
export const config = {
  schedule: '@daily',
}
