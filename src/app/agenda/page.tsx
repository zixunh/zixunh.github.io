import { readFileSync } from "fs";
import path from "path";
import { PUBLIC_AGENDA } from "@/data/config";
import AgendaContent from "@/components/AgendaContent";

export default function AgendaPage() {
  const filePath = path.join(process.cwd(), "src", "data", "agenda.txt");
  const content = readFileSync(filePath, "utf-8");

  return <AgendaContent content={content} publicAccess={PUBLIC_AGENDA} />;
}
