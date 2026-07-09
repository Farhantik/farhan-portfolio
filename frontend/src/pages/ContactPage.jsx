import { useState } from "react";
import { profile } from "../data/profile.js";

const WHATSAPP_NUMBER = "6281336052078"; // +62 813-3605-2078
const MAX_MESSAGE_LENGTH = 500;

function buildWhatsAppUrl({ name, email, message }) {
  const lines = [
    `Halo Farhan, perkenalkan saya ${name}.`,
    email ? `Email: ${email}` : null,
    "",
    message,
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
    if (status === "opening") return;

    const url = buildWhatsAppUrl(form);
    setStatus("opening");
    setFallbackUrl(url);

    const win = window.open(url, "_blank", "noopener,noreferrer");

    if (win) {
      setForm({ name: "", email: "", message: "" });
    }

    // Re-enable the button shortly after, in case the user needs to send another message.
    setTimeout(() => setStatus("idle"), 2000);
  };

  return (
    <section className="placeholder-page">
      <div className="container">
        <h1>Get in touch</h1>
        <p>Send a message and it'll open a WhatsApp chat with me.</p>
        <p className="form-subnote">I usually reply within 24 hours.</p>

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
          <div className="textarea-wrapper">
            <textarea
              name="message"
              placeholder="Your message"
              rows={5}
              maxLength={MAX_MESSAGE_LENGTH}
              value={form.message}
              onChange={handleChange}
              required
            />
            <span className="char-counter">
              {form.message.length}/{MAX_MESSAGE_LENGTH}
            </span>
          </div>

          <button
            type="submit"
            className="btn btn-primary"
            disabled={status === "opening"}
          >
            {status === "opening" ? "Opening WhatsApp..." : "Chat via WhatsApp"}
          </button>

          {status === "opening" && fallbackUrl && (
            <p className="form-status">
              Didn't open?{" "}
              <a href={fallbackUrl} target="_blank" rel="noreferrer">
                Click here
              </a>
            </p>
          )}

          <p className="form-subnote">
            Prefer email? Reach me at{" "}
            <a
              href={`https://mail.google.com/mail/u/0/?fs=1&to=${profile.email}&tf=cm`}
              target="_blank"
              rel="noreferrer"
            >
              {profile.email}
            </a>.
          </p>
          <p className="form-privacy-note">
            This message is sent directly to WhatsApp — it isn't stored on any server.
          </p>
        </form>
      </div>
    </section>
  );
}