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
const file = fs.readFileSync(
  `/Users/enzobacqueyrisses/dev/enzo/portfolio/public/images/logo.webp`
);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    res.status(200).setHeader("Content-Type", "image/jpeg").send(file);
  } catch (error) {
    console.log(error);
  }
  // await NextCors(req, res, {
  //   methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE"],
  //   origin: "*",
  //   optionsSuccessStatus: 200,
  // });
}
