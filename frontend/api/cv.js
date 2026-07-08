import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const cvPath = path.join(__dirname, "assets", "cv.pdf");

export default function handler(req, res) {
  if (req.method !== "GET") {
    res.setHeader("Allow", "GET");
    return res.status(405).json({ error: "Method not allowed" });
  }

  if (!fs.existsSync(cvPath)) {
    return res.status(404).json({ error: "CV not found" });
  }

  const file = fs.readFileSync(cvPath);
  res.setHeader("Content-Type", "application/pdf");
  res.setHeader("Content-Disposition", 'inline; filename="Farhan-CV.pdf"');
  return res.status(200).send(file);
}