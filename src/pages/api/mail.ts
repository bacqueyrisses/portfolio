import type { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";

const file = fs.readFileSync(`public/images/logo.webp`);

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res
    .status(200)
    .setHeader("Content-Type", "image/jpeg")
    .send(
      "/Users/enzobacqueyrisses/dev/enzo/portfolio/public/images/logo.webp"
    );
}
