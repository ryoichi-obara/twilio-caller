const accountSid = process.env.TWILIO_SID;
const authToken = process.env.TWILIO_TOKEN;
const telFrom = process.env.TWILIO_TEL_FROM; // ex. '+8108012345678'

const client = require('twilio')(accountSid, authToken);

exports.handler = (event, context, callback) => {
  // https://jp.twilio.com/docs/api/twiml/twilio_request

  console.log(`Callig to ${event.callTo}...`);
  client.calls.create(
    {
      url: 'http://demo.twilio.com/docs/voice.xml',
      to: event.callTo,
      from: telFrom,
    },
    (err, call) => {
      console.log(call.sid);
    },
  );

  callback(null, 'Success.');
};
