import { stats } from "../data/profile.js";

export default function Stats() {
  return (
    <section className="stats">
      <div className="container stats-grid">
        {stats.map((stat) => (
          <div className="stat" key={stat.label}>
            <span className="stat-value">{stat.value}</span>
            <span className="stat-comment">// {stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
