import { skills } from "../data/profile.js";

export default function Skills() {
  return (
    <section className="skills">
      <div className="container">
        <p className="section-eyebrow reveal">// tools I use</p>
        <div className="skills-grid">
          {skills.map((skill, i) => (
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