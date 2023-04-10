import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  port: 465,
  host: "smtp.gmail.com",
  auth: {
    user: "devzoneapplication@gmail.com",
    pass: "ixxmqoldbumxvmok",
  },
  secure: true,
});

export default transporter;
