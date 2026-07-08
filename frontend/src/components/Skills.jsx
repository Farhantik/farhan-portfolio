import { skills } from "../data/profile.js";

export default function Skills() {
  return (
    <section className="skills">
      <div className="container">
        <p className="section-eyebrow">// tools I use</p>
        <div className="skills-grid">
          {skills.map((skill) => (
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
