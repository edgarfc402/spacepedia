import { useEffect, useState } from "react";
import { getFavorites, removeFavorite } from "../services/favorites";
import Button from "../components/Button";

export default function Favorites() {
  // Lista de favoritos que vienen de localStorage
  const [items, setItems] = useState([]);

  // Carga favoritos al entrar a la página
  useEffect(() => {
    setItems(getFavorites());
  }, []);

  // Elimina un favorito y recarga la lista
  function onRemove(id) {
    removeFavorite(id);
    setItems(getFavorites());
  }

  return (
    <div>
      <h2>Favoritos</h2>

      {/* Mensaje cuando no hay favoritos */}
      {items.length === 0 && <p>No tienes favoritos todavía.</p>}

      {/* Grid de tarjetas */}
      <section className="grid">
        {items.map((item) => (
          <article key={item.id} className="card">
            {/* Nombre del favorito */}
            <h3>{item.name}</h3>

            {/* Tipo de favorito (planet o apod) */}
            <p style={{ color: "var(--muted)" }}>
              Tipo: {item.type}
            </p>

            {/* Si es APOD, muestra link para ver la imagen/video */}
            {item.type === "apod" && item.url && (
              <a 
                href={item.url} 
                target="_blank" 
                rel="noreferrer"
                style={{ display: "block", marginBottom: 8 }}
              >
                Ver APOD →
              </a>
            )}

            {/* Botón para eliminar */}
            <Button 
              variant="secondary" 
              onClick={() => onRemove(item.id)} 
              style={{ marginTop: 12 }}
            >
              Eliminar
            </Button>
          </article>
        ))}
      </section>
    </div>
  );
}


