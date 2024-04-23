import { NextResponse } from "next/server";
import { v4 as uuidv4 } from "uuid";

export async function POST(req: Request) {
  const uuid = uuidv4();

  const data = await req.formData();
  console.log(data);

  return NextResponse.json({ id: uuid });
}
