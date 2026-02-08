import { useEffect, useState } from "react";
import { getFavorites, removeFavorite } from "../services/favorites";

export default function Favorites() {
  const [items, setItems] = useState([]);

  // Carga favoritos al entrar a la página
  useEffect(() => {
    setItems(getFavorites());
  }, []);

  function onRemove(id) {
    removeFavorite(id);
    setItems(getFavorites()); // recarga lista
  }

  return (
    <div>
      <h2>Favoritos</h2>

      {items.length === 0 && <p>No tienes favoritos todavía.</p>}

      <section className="grid">
        {items.map((item) => (
          <article key={item.id} className="card">
            <h3>{item.name}</h3>
            <p style={{ color: "var(--muted)" }}>Tipo: {item.type}</p>

            <button onClick={() => onRemove(item.id)}>
              Eliminar
            </button>
          </article>
        ))}
      </section>
    </div>
  );
}
