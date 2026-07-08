import { FileText, Wallet, ShoppingCart } from "lucide-react";
import { featuredWork, moreWork, appProjects } from "../data/profile.js";

const iconMap = {
  wallet: Wallet,
  "shopping-cart": ShoppingCart,
};

export default function WorkPage() {
  return (
    <section className="work-page">
      <div className="container">
        <p className="section-eyebrow">// featured projects</p>

        <div className="work-featured">
          {featuredWork.map((project) => (
            <article className="work-card" key={project.title}>
              <div className="work-thumbs">
                {project.thumbs.map((thumb) => (
                  <img key={thumb} src={thumb} alt={project.title} />
                ))}
              </div>
              <div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <ul className="work-docs">
                  {project.docs.map((doc) => (
                    <li key={doc.href}>
                      <a href={doc.href} target="_blank" rel="noreferrer">
                        <FileText size={14} aria-hidden="true" />
                        {doc.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>

        <p className="section-eyebrow">// applications built</p>
        <div className="app-projects">
          {appProjects.map((proj) => {
            const Icon = iconMap[proj.icon];
            return (
              <article className="app-project-card" key={proj.title}>
                {proj.image && (
                  <img className="app-project-image" src={proj.image} alt={`${proj.title} screenshot`} />
                )}
                <div className="app-project-icon">
                  <Icon size={22} aria-hidden="true" />
                </div>
                <h3>{proj.title}</h3>
                <p>{proj.description}</p>
                <div className="tech-badges">
                  {proj.tech.map((t) => (
                    <span className="tech-badge" key={t}>
                      {t}
                    </span>
                  ))}
                </div>
              </article>
            );
          })}
        </div>

        <p className="section-eyebrow">// more work</p>
        <div className="work-gallery">
          {moreWork.map((thumb) => (
            <img key={thumb} src={thumb} alt="Project screenshot" />
          ))}
        </div>
      </div>
    </section>
  );
}
