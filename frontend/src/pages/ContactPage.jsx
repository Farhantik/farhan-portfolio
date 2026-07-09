import { useState } from "react";

const WHATSAPP_NUMBER = "6281336052078"; // +62 813-3605-2078

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();

    const text = `Halo Farhan, saya ${form.name} (${form.email}).\n\n${form.message}`;
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;

    window.open(url, "_blank", "noopener,noreferrer");
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
            placeholder="Your email"
            value={form.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Your message"
            rows={5}
            value={form.message}
            onChange={handleChange}
            required
          />
          <button type="submit" className="btn btn-primary">
            Send via WhatsApp
          </button>
        </form>
      </div>
    </section>
  );
}