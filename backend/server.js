import express from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";
import contactRouter from "./routes/contact.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// --- API routes ---
app.use("/api/contact", contactRouter);

app.get("/api/health", (req, res) => {
  res.json({ status: "ok", time: new Date().toISOString() });
});

// Simple "download CV" endpoint. Drop your real CV file at
// backend/assets/cv.pdf and it will be served here.
app.get("/api/cv", (req, res) => {
  const filePath = path.join(__dirname, "assets", "cv.pdf");
  res.download(filePath, "Farhan-Abimanyu-CV.pdf", (err) => {
    if (err) {
      res.status(404).json({ error: "CV file not found. Add it at backend/assets/cv.pdf" });
    }
  });
});

// --- Serve the built React app in production ---
// Run `npm run build` in /frontend first, it outputs to /frontend/dist
const frontendDist = path.join(__dirname, "..", "frontend", "dist");
app.use(express.static(frontendDist));
app.get("*", (req, res, next) => {
  if (req.path.startsWith("/api")) return next();
  res.sendFile(path.join(frontendDist, "index.html"), (err) => {
    if (err) next();
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
