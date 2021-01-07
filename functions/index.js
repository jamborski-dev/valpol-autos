const sgMail = require('@sendgrid/mail');

exports.handler = async function(event, context, callback) {
  const { name, msg, phone, email } = JSON.parse(event.body).payload;

  console.log(JSON.stringify(context, null, 2));

  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  msgConfig = {
    to: process.env.EMAIL_TO,
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

  
// const express = require('express');
// const app = express();


// app.use(express.static('public'));
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

// app.get('/', (res, req) => {
//   res.sendFile('index.html');
// });

// app.post('/', (req, res) => {
//   const name = req.body.name;
//   const phone = req.body.phone;
//   const email = req.body.email;
//   const msg = req.body.msg;
//   const date = new Date();
//   const dateFormated = `${date.getDate()}.${date.getMonth()+1}.${date.getFullYear()}`;
  
// })

// const port = process.env.PORT || 8070;

// app.listen(port, () => {
//   console.log(`App is running on port ${port}`);
// });