import { Download } from "lucide-react";
import {
  profile,
  summary,
  workExperience,
  organizations,
  education,
  certifications,
  resumeSkills,
} from "../data/profile.js";

function Timeline({ items }) {
  return (
    <div className="timeline">
      {items.map((item) => (
        <div className="timeline-item" key={`${item.role}-${item.org}`}>
          <div className="timeline-dot" />
          <div>
            <h3>{item.role}</h3>
            <p className="place">
              {item.org} — {item.place}
            </p>
            <p className="period">{item.period}</p>
            <p>{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default function ResumePage() {
  return (
    <section className="resume-page">
      <div className="container">
        <div className="resume-header">
          <img src={profile.photoResume} alt={profile.name} />
          <div>
            <h1>{profile.name}</h1>
            <p>{profile.location}</p>
          </div>
          <a href={profile.cvUrl} className="btn btn-outline resume-download">
            <Download size={16} />
            Download CV
          </a>
        </div>

        <p className="section-eyebrow">// summary</p>
        <p className="resume-summary">{summary}</p>

        <p className="section-eyebrow">// work experience</p>
        <Timeline items={workExperience} />

        <p className="section-eyebrow">// organizational experience</p>
        <Timeline items={organizations} />

        <p className="section-eyebrow">// education</p>
        <div className="education-grid">
          {education.map((item) => (
            <div className="education-card" key={item.title}>
              <img src={item.icon} alt="" aria-hidden="true" />
              <div>
                <h3>{item.title}</h3>
                <p className="place">{item.place}</p>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        <p className="section-eyebrow">// certifications</p>
        <div className="education-grid">
          {certifications.map((item) => (
            <div className="education-card" key={item.title}>
              <img src={item.icon} alt="" aria-hidden="true" />
              <div>
                <h3>{item.title}</h3>
                <p className="place">{item.place}</p>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        <p className="section-eyebrow">// skills</p>
        <div className="skills-grid">
          {resumeSkills.map((skill) => (
            <div className="skill-card" key={skill.name}>
              <img src={skill.icon} alt={skill.name} />
              <span>{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
