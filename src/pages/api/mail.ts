import type { NextApiRequest, NextApiResponse } from "next";
import NextCors from "nextjs-cors";
import fs from "fs";

// async function cors(req: NextApiRequest, res: NextApiResponse) {
//   await NextCors(req, res, {
//     methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE"],
//     origin: "*",
//     optionsSuccessStatus: 200,
//   });
// }

// const file = fs.readFileSync(`public/images/logo.webp`);
const file = fs.readFileSync(process.cwd() + "/public/images/logo.webp");

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  res.status(200).setHeader("Content-Type", "image/webp").send(file);
  // await NextCors(req, res, {
  //   methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE"],
  //   origin: "*",
  //   optionsSuccessStatus: 200,
  // });
}
