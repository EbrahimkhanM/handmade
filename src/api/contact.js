export default async function (req, res) {
  require("dotenv").config();

  let nodemailer = require("nodemailer");
  const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth: {
      user: process.env.YOUR_MAIL,
      pass: process.env.MAIL_API,
    },
    secure: true,
    // requireTLS:false,
    // secureConnection: false,
    // tls: { ciphers: "SSLv3" },
  });
  const mailData = {
    from: process.env.YOUR_MAIL,
    to: process.env.RECIVER_MAIL,
    subject: `Messege From Handicrafts`,
      // text: req.body.message + " | Sent from: " + req.body.email,
    html: `
      <div><strong>Name:</strong> ${req.body.name}</div>
      <br/>
      <div><strong>Email:</strong> ${req.body.email}</div>
      <br/>
      <div><strong>Message:</strong> ${req.body.message}</div>
      <br/>
      `,
  };
  await new Promise((resolve, reject) => {
    transporter.sendMail(mailData, function (err, info) {
      if (err) {
        console.log(err);
        reject(err);
      } else {
        console.log(info);
        resolve(info);
      }
    });
  });
  res.status(200).json({ status: "OK" });
}