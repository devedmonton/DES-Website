const mailchimp = require("@mailchimp/mailchimp_marketing");
const apiKey = process.env.MAILCHIMP_API_KEY;
const listID = process.env.MAILCHIMP_LIST_ID;

mailchimp.setConfig({
    apiKey,
    server: "us1",
});

exports.handler = async function (event) {
    const email = JSON.parse(event.body).email;
    try {
        const res = await mailchimp.lists.addListMember(listID, {
            email_address: email,
            status: "pending",
        });
        return {
            statusCode: 200,
            body: JSON.stringify({ signUpEmail: res.email_address }),
        };
    } catch (e) {
        return {
            statusCode: e.status,
            body:
                e.response?.text ||
                JSON.stringify({ error: "Error adding email" }),
        };
    }
};
