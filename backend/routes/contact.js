import { Router } from "express";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { sendContactNotification } from "../mailer.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const dataFile = path.join(__dirname, "..", "data", "messages.json");

function readMessages() {
  if (!fs.existsSync(dataFile)) return [];
  return JSON.parse(fs.readFileSync(dataFile, "utf-8"));
}

function saveMessages(messages) {
  fs.writeFileSync(dataFile, JSON.stringify(messages, null, 2));
}

const router = Router();

router.post("/", (req, res) => {
  const { name, email, message } = req.body || {};

  if (!name || !email || !message) {
    return res.status(400).json({ error: "Name, email, and message are all required." });
  }

  const entry = {
    id: Date.now(),
    name,
    email,
    message,
    receivedAt: new Date().toISOString(),
  };

  const messages = readMessages();
  messages.push(entry);
  saveMessages(messages);

  console.log("New contact message:", entry);

  sendContactNotification({ name, email, message });

  res.status(201).json({ message: "Message received, thanks for reaching out." });
});

router.get("/", (req, res) => {
  res.json(readMessages());
});

export default router;