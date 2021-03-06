const accountSid = process.env.TWILIO_SID;
const authToken = process.env.TWILIO_TOKEN;
const telFrom = process.env.TWILIO_TEL_FROM; // ex. '+8108012345678'

const client = require('twilio')(accountSid, authToken);

exports.handler = async (event) => {
  // https://jp.twilio.com/docs/api/twiml/twilio_request

  console.log(`Callig to ${event.callTo}...`);
  const call = await client.calls.create({
    url: 'http://demo.twilio.com/docs/voice.xml',
    to: event.callTo,
    from: telFrom,
  });

  console.log(call.sid);

  return {
    statusCode: 200,
    body: JSON.stringify('Success.'),
  };
};
