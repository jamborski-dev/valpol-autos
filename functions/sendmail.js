const sgMail = require('@sendgrid/mail');

exports.handler = async function(event, context, callback) {

  const { name, msg, phone, email } = JSON.parse(event.body);
  const { SENDGRID_API_KEY, SENDGRID_EMAIL_TO } = process.env;

  sgMail.setApiKey(SENDGRID_API_KEY);
  msgConfig = {
    to: SENDGRID_EMAIL_TO,
    from: email,
    subject: `You have a new enquiry from ${name}`,
    html: `
      <h3>${name} sent you an enquiry on ${dateFormated}<h3>
      <blockquote>${msg}</blockquote>
      <br>
      <p>Phone <strong>${phone}<strong></p>
      <p>Email <strong>${email}<strong></p>
    `
  };
  sgMail
    .send(msgConfig)
    .then(() => {
      callback(null, {
        statusCode: 200,
        body: "Beep, boop, you just got serverless."
      })
    })
    .catch(err => {
      callback(null, {
        statusCode: 403,
        body: "There was an error ; c"
      })
      console.error(err);
    });
  }