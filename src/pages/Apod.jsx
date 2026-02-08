import { useEffect, useState } from "react";
import { getApod } from "../services/nasa";
import { addFavorite, removeFavorite, isFavorite } from "../services/favorites";

export default function Apod() {
  // Guarda el resultado de la API
  const [apod, setApod] = useState(null);

  // Estado de carga
  const [loading, setLoading] = useState(true);

  // Estado de error
  const [error, setError] = useState("");

  // Estado para favoritos
  const [fav, setFav] = useState(false);

  useEffect(() => {
    async function load() {
      try {
        setLoading(true);
        setError("");

        const data = await getApod(); // pedir datos a NASA
        setApod(data);

        // Ver si ya estaba en favoritos
        const id = `apod-${data.date}`;
        setFav(isFavorite(id));
      } catch (e) {
        setError("Error al cargar APOD. Intenta de nuevo.");
      } finally {
        setLoading(false);
      }
    }

    load();
  }, []);

  function toggleFavorite() {
    if (!apod) return;

    const id = `apod-${apod.date}`;

    if (fav) {
      removeFavorite(id);
      setFav(false);
    } else {
      addFavorite({
        id,
        type: "apod",
        name: apod.title,
        url: apod.url,
        date: apod.date,
      });
      setFav(true);
    }
  }

  if (loading) return <p>Cargando APOD...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h2>Foto Astronómica del Día (NASA)</h2>

      <h3>{apod?.title}</h3>

      <button onClick={toggleFavorite} style={{ marginBottom: 12 }}>
        {fav ? "Quitar de favoritos" : "Guardar en favoritos"}
      </button>

      {apod?.media_type === "image" && (
        <img
          src={apod.url}
          alt={apod.title}
          style={{ width: "100%", maxWidth: 900, borderRadius: 16 }}
        />
      )}

      {apod?.media_type === "video" && (
        <a href={apod.url} target="_blank" rel="noreferrer">
          Ver video en YouTube →
        </a>
      )}

      <p style={{ color: "var(--muted)", lineHeight: 1.7 }}>
        {apod?.explanation}
      </p>
    </div>
  );
}

