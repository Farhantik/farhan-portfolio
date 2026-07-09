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
      {items.map((item, i) => (
        <div className="timeline-item reveal" style={{ "--i": i }} key={`${item.role}-${item.org}`}>
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
        <div className="resume-header reveal">
          <img src={profile.photoResume} alt={profile.name} />
          <div>
            <h1>{profile.name}</h1>
            <p>{profile.location}</p>
          </div>
          <a href={profile.cvUrl} className="btn btn-outline resume-download btn-bounce">
            <Download size={16} />
            Download CV
          </a>
        </div>

        <p className="section-eyebrow reveal">// summary</p>
        <p className="resume-summary reveal">{summary}</p>

        <p className="section-eyebrow reveal">// work experience</p>
        <Timeline items={workExperience} />

        <p className="section-eyebrow reveal">// organizational experience</p>
        <Timeline items={organizations} />

        <p className="section-eyebrow reveal">// education</p>
        <div className="education-grid">
          {education.map((item, i) => (
            <div className="education-card reveal" style={{ "--i": i }} key={item.title}>
              <img src={item.icon} alt="" aria-hidden="true" />
              <div>
                <h3>{item.title}</h3>
                <p className="place">{item.place}</p>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        <p className="section-eyebrow reveal">// certifications</p>
        <div className="education-grid">
          {certifications.map((item, i) => (
            <div className="education-card reveal" style={{ "--i": i }} key={item.title}>
              <img src={item.icon} alt="" aria-hidden="true" />
              <div>
                <h3>{item.title}</h3>
                <p className="place">{item.place}</p>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        <p className="section-eyebrow reveal">// skills</p>
        <div className="skills-grid">
          {resumeSkills.map((skill, i) => (
            <div className="skill-card reveal" style={{ "--i": i }} key={skill.name}>
              <img src={skill.icon} alt={skill.name} />
              <span>{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}