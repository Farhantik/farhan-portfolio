import { Github, Linkedin, Twitter, Instagram, Mail, Download } from "lucide-react";
import { profile, socials, stack } from "../data/profile.js";

const iconMap = {
  github: Github,
  linkedin: Linkedin,
  twitter: Twitter,
  instagram: Instagram,
  mail: Mail,
};

// Deterministic-ish positions so the floating chips fan out around the frame
const chipPositions = [
  { top: "6%", left: "-10%", delay: "0s" },
  { top: "20%", right: "-14%", delay: "1s" },
  { bottom: "28%", left: "-16%", delay: "2s" },
  { bottom: "10%", right: "-8%", delay: "0.5s" },
  { top: "48%", right: "-18%", delay: "1.5s" },
];

export default function Hero() {
  return (
    <section className="hero">
      <div className="container hero-grid">
        <div className="reveal" style={{ "--i": 0 }}>
          <p className="eyebrow">
            // {profile.role.toLowerCase()}
            <span className="cursor" />
          </p>

          <h1 className="hero-title">
            Hello, I&rsquo;m <span className="name">{profile.name}</span>
          </h1>

          <p className="hero-text">{profile.tagline}</p>

          <div className="hero-actions">
            <a href={profile.cvUrl} className="btn btn-primary btn-bounce">
              <Download size={18} />
              Download CV
            </a>

            <div className="socials">
              {socials.map(({ label, icon, href }) => {
                const Icon = iconMap[icon];
                return (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    className="social-btn"
                    aria-label={label}
                  >
                    <Icon size={18} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="code-window reveal" style={{ "--i": 1 }}>
          <div className="code-window-bar">
            <span className="dot red" />
            <span className="dot yellow" />
            <span className="dot green" />
            <span className="code-window-filename">hero.jsx</span>
          </div>
          <div className="code-window-body">
            <img className="avatar-photo avatar-bounce" src={profile.photo} alt={profile.name} />
            {stack.map((tech, i) => (
              <span
                key={tech}
                className="chip"
                style={{ ...chipPositions[i % chipPositions.length], animationDelay: chipPositions[i % chipPositions.length].delay }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}