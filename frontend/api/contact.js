import { sendContactNotification } from "./_lib/mailer.js";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { name, email, message } = req.body || {};

  if (!name || !email || !message) {
    return res
      .status(400)
      .json({ error: "Name, email, and message are all required." });
  }

  const entry = {
    id: Date.now(),
    name,
    email,
    message,
    receivedAt: new Date().toISOString(),
  };

  console.log("New contact message:", entry);

  await sendContactNotification({ name, email, message });

  return res
    .status(201)
    .json({ message: "Message received, thanks for reaching out." });
}