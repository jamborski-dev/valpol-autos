// require('dotenv').config();
// const express = require('express');
// const app = express();

// const sgMail = require('@sendgrid/mail');

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
  
//   sgMail.setApiKey(process.env.SENDGRID_API_KEY);
//   msgConfig = {
//     to: process.env.EMAIL_TO,
//     from: email,
//     subject: `You have a new enquiry from ${name}`,
//     html: `
//       <h3>${name} sent you an enquiry on ${dateFormated}<h3>
//       <blockquote>${msg}</blockquote>
//       <br>
//       <p>Phone <strong>${phone}<strong></p>
//       <p>Email <strong>${email}<strong></p>
//     `
//   };
//   sgMail
//     .send(msgConfig)
//     .then(() => {
//       console.log('Email sent with a success');
//       // session.setItem('isFormSubmitted', true);
//       // session.setItem('formResult', 'success');
//       // setTimeout(() => {
//       //   session.clear();
//       // }, 5000);
//       res.redirect('/');
//     })
//     .catch(err => {
//       // session.setItem('isFormSubmitted', true);
//       // session.setItem('formResult', 'error');
//       // setTimeout(() => {
//       //   session.clear();
//       // }, 5000);
//       console.error(err);
//     });
// })

// const port = process.env.PORT || 8070;

// app.listen(port, () => {
//   console.log(`App is running on port ${port}`);
// });