import type { NextApiRequest, NextApiResponse } from "next";
import NextCors from "nextjs-cors";
import fs from "fs";

const file = fs.readFileSync(process.cwd() + "/public/images/logo.webp");

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  console.log(req);
  res.status(200).setHeader("Content-Type", "image/webp").send(file);
}
