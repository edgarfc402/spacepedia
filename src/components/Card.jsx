export default function Card({ title, description }) {
  return (
    <article className="card">
      {/* Título de la tarjeta */}
      <h3 className="card__title">{title}</h3>

      {/* Texto corto de la tarjeta */}
      <p className="card__desc">{description}</p>
    </article>
  );
}
