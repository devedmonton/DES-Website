exports.handler = async function (event) {
    const email = JSON.parse(event.body).email;
    return {
        statusCode: 200,
        body: JSON.stringify({ message: `Signed Up ${email}` }),
    };
};
