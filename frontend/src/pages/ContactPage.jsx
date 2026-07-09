import { useState } from "react";

const WHATSAPP_NUMBER = "6281336052078"; // +62 813-3605-2078
const MAX_MESSAGE_LENGTH = 500;

function buildWhatsAppUrl({ name, email, message }) {
  const lines = [
    "Halo Farhan! 👋",
    `Nama: ${name}`,
    email ? `Email: ${email}` : null,
    "",
    `Pesan: ${message}`,
  ].filter((line) => line !== null);

  const text = lines.join("\n");
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | opening
  const [fallbackUrl, setFallbackUrl] = useState(null);

  const handleChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();

    const url = buildWhatsAppUrl(form);
    setStatus("opening");
    setFallbackUrl(url);

    const win = window.open(url, "_blank", "noopener,noreferrer");

    // If the popup was blocked, `win` will be null/undefined.
    if (win) {
      setForm({ name: "", email: "", message: "" });
    }
  };

  return (
    <section className="placeholder-page">
      <div className="container">
        <h1>Get in touch</h1>
        <p>Send a message and it'll open a WhatsApp chat with me.</p>
        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your name"
            value={form.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your email (optional)"
            value={form.email}
            onChange={handleChange}
          />
          <textarea
            name="message"
            placeholder="Your message"
            rows={5}
            maxLength={MAX_MESSAGE_LENGTH}
            value={form.message}
            onChange={handleChange}
            required
          />
          <button type="submit" className="btn btn-primary">
            Send via WhatsApp
          </button>

          {status === "opening" && (
            <p className="form-status">
              Membuka WhatsApp...{" "}
              {fallbackUrl && (
                <a href={fallbackUrl} target="_blank" rel="noreferrer">
                  Belum terbuka? Klik di sini
                </a>
              )}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}