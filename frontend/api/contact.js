import nodemailer from "nodemailer";

const { GMAIL_USER, GMAIL_APP_PASSWORD, MAIL_TO } = process.env;

function escapeHtml(str = "") {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

async function sendContactNotification({ name, email, message }) {
  if (!GMAIL_USER || !GMAIL_APP_PASSWORD) {
    console.warn(
      "[contact] GMAIL_USER / GMAIL_APP_PASSWORD belum dikonfigurasi — notifikasi email dilewati."
    );
    return;
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: GMAIL_USER,
      pass: GMAIL_APP_PASSWORD,
    },
  });

  try {
    await transporter.sendMail({
      from: `"Portfolio Contact Form" <${GMAIL_USER}>`,
      to: MAIL_TO || GMAIL_USER,
      replyTo: email,
      subject: `Pesan baru dari ${name} (Portfolio Contact Form)`,
      text: `Nama: ${name}\nEmail: ${email}\n\nPesan:\n${message}`,
      html: `
        <div style="font-family: sans-serif; line-height: 1.6;">
          <h2>Pesan baru dari form kontak</h2>
          <p><strong>Nama:</strong> ${escapeHtml(name)}</p>
          <p><strong>Email:</strong> ${escapeHtml(email)}</p>
          <p><strong>Pesan:</strong></p>
          <p>${escapeHtml(message).replace(/\n/g, "<br/>")}</p>
        </div>
      `,
    });
    console.log("[contact] Email terkirim ke", MAIL_TO || GMAIL_USER);
  } catch (err) {
    console.error("[contact] Gagal mengirim email:", err.message);
  }
}

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

  console.log("New contact message:", { name, email, receivedAt: new Date().toISOString() });

  await sendContactNotification({ name, email, message });

  return res
    .status(201)
    .json({ message: "Message received, thanks for reaching out." });
}