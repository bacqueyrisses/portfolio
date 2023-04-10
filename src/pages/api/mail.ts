import type { NextApiRequest, NextApiResponse } from "next";
import NextCors from "nextjs-cors";
import fs from "fs";
import transporter from "./../../services/mailer";

const file = fs.readFileSync(process.cwd() + "/public/images/logo.webp");

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await transporter.sendMail({
    from: "devzoneapplication@gmail.com",
    to: "enzo.bacqueyrisses@gmail.com",
    subject: "Mail lu",
    html: `<b>Test</b>`,
  });
  res.status(200).setHeader("Content-Type", "image/webp").send(file);
}
