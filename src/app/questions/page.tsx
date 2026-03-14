import { readFileSync } from "fs";
import path from "path";
import { PUBLIC_QUESTIONS } from "@/data/config";
import QuestionsContent from "@/components/QuestionsContent";

export default function QuestionsPage() {
  const filePath = path.join(process.cwd(), "src", "data", "questions.txt");
  const content = readFileSync(filePath, "utf-8");

  return <QuestionsContent content={content} publicAccess={PUBLIC_QUESTIONS} />;
}
