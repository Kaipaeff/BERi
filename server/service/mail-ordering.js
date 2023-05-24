const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
});

function sendOrderMail(message) {
  transporter.sendMail(message, (err, info) => {
    if (err) return console.log(err, '<<<<ERRRORRRR');
  });
}
module.exports = sendOrderMail;
