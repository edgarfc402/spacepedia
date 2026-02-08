import { Link } from "react-router-dom";
import { planets } from "../data/planets";

export default function Planets() {
  return (
    <div>
      <h2>Planetas</h2>

      <section className="grid">
        {planets.map(p => (
          <article key={p.id} className="card">
            <h3>{p.name}</h3>
            <p>{p.description}</p>
            <Link to={`/planets/${p.id}`}>Ver detalles →</Link>
          </article>
        ))}
      </section>
    </div>
  );
}
