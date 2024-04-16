// pages/api/upload.ts
import { NextApiResponse } from "next";
import { v4 as uuidv4 } from "uuid";

export default async function POST(req: Request, res: NextApiResponse) {
  const uuid = uuidv4();

  const data = await req.formData();

  return res.json({ id: uuid });
}
