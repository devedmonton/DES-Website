import mailChimp from '@mailchimp/mailchimp_marketing'

export default defineEventHandler(async (event) => {
  const { name, email } = await readBody(event)

  // input validations
  if (!name || !email) {
    return {
      statusCode: 500,
      message: 'Invalid input.',
    }
  }

  const { apiKey, listId, server } = useRuntimeConfig(event).mailChimp

  try {
    mailChimp.setConfig({
      apiKey,
      server,
    })
    const res = await mailChimp.lists.addListMember(listId, {
      email_address: email,
      status: 'pending',
      merge_fields: {
        FNAME: name,
      },
    })
    console.log(res)
    return {
      statusCode: 200,
      message: 'Success',
      email,
    }
  }
  catch (error) {
    console.error(error)
    return {
      statusCode: 500,
      message: 'Error, please try again later.',
    }
  }
})
