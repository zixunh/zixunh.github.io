import { NextRequest, NextResponse } from "next/server";
import { readFileSync } from "fs";
import path from "path";

const CORRECT_PASSWORD = process.env.QUESTIONS_PASSWORD ?? "research";

export async function POST(req: NextRequest) {
  const { password } = await req.json();

  if (password !== CORRECT_PASSWORD) {
    return NextResponse.json({ error: "Incorrect password." }, { status: 401 });
  }

  const filePath = path.join(process.cwd(), "src", "data", "questions.txt");
  const content = readFileSync(filePath, "utf-8");

  return NextResponse.json({ content });
}
