import { Resend } from "resend";

const { RESEND_API_KEY, MAIL_TO } = process.env;

function escapeHtml(str = "") {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

async function sendContactNotification({ name, email, message }) {
  if (!RESEND_API_KEY) {
    console.warn(
      "[contact] RESEND_API_KEY belum dikonfigurasi — notifikasi email dilewati."
    );
    return;
  }

  const resend = new Resend(RESEND_API_KEY);

  try {
    await resend.emails.send({
      from: "Portfolio Contact Form <onboarding@resend.dev>",
      to: MAIL_TO,
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
    console.log("[contact] Notifikasi email terkirim ke", MAIL_TO);
  } catch (err) {
    console.error("[contact] Gagal mengirim email notifikasi:", err.message);
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