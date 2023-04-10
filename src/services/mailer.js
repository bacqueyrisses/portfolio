import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  port: 465,
  host: "smtp.gmail.com",
  auth: {
    user: "enzo.bacqueyrisses@gmail.com",
    pass: process.env.GMAIL_PASSWORD,
  },
  secure: true,
});

export default transporter;
