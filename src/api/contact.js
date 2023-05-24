export default async function (req, res) {
  console.log("mailData >>>",req.body)
  require("dotenv").config();

  let nodemailer = require("nodemailer");
  const transporter = nodemailer.createTransport({
    port: 587,
    host: "smtp.gmail.com",
    auth: {
      user: process.env.MAIL_FROM,
      pass: process.env.MAIL_AUTH,
    },
    secure: false,
  });

  const mailData = {
    from: process.env.USER_EMAIL,
    to: req.body.email,
    subject: `Message From Vigorant`,
    html: `
    <div>
        <p>Name: ${req.body.name}</p>
        <p>Email: ${req.body.email}</p>
        <p>time: ${req.body.message}</p>
        </div>
   ` ,
  };
  await transporter
    .sendMail(mailData)
   
    .then((re) => {
      res.status(200).json({ status: "OK" });
    })
    .catch((er) => {
      res.status(500).json({ status: "error" });
    });
}
