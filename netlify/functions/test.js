exports.handler = async function (event, context) {
    console.log("Functions test");
    return {
        statusCode: 200,
        body: JSON.stringify({ message: "hi there" }),
    };
};
