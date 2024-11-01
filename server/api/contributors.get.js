/**
 * API endpoint for fetching contributors.
 * @example
 * // Example usage:
 * // GET /api/contributors
 */
// eslint-disable-next-line
export default defineEventHandler(async (event) => {
  // we're going to use our key
  const { githubAppAPIKey } = useRuntimeConfig(event).githubAPI

  // and the api endpoint
  const CONTRIBUTORS_ENDPOINT = 'https://api.github.com/repos/devedmonton/DES-Website/collaborators'

  // make the request
  try {
    // await the collaborators endpoint from github using nitros fetch
    const data = await $fetch(CONTRIBUTORS_ENDPOINT, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${githubAppAPIKey}`,
      },
    })
    return {
      statusCode: 200,
      message: `Contributors fetch successfully`,
      contributors: data,
    }
  }
  catch (error) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Bad Request',
      message: 'Error while fetching contributors.',
      error: 'Error while fetching contributors.',
    })
  }
})
