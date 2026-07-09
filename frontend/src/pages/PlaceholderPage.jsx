export default function PlaceholderPage({ title, description }) {
  return (
    <section className="placeholder-page">
      <div className="container reveal">
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    </section>
  );
}