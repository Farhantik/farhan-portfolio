import { Resend } from "resend";

const { RESEND_API_KEY, MAIL_TO } = process.env;

const resend = RESEND_API_KEY ? new Resend(RESEND_API_KEY) : null;

if (!resend) {
  console.warn(
    "[mailer] RESEND_API_KEY belum dikonfigurasi — notifikasi email dinonaktifkan."
  );
}

export async function sendContactNotification({ name, email, message }) {
  if (!resend) return;

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
    console.log("[mailer] Notifikasi email terkirim ke", MAIL_TO);
  } catch (err) {
    console.error("[mailer] Gagal mengirim email notifikasi:", err.message);
  }
}

function escapeHtml(str = "") {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}