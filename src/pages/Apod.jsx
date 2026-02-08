import { useEffect, useState } from "react";
import { getApod } from "../services/nasa";

export default function Apod() {
  // Guarda el resultado de la API
  const [apod, setApod] = useState(null);

  // Estado de carga
  const [loading, setLoading] = useState(true);

  // Estado de error
  const [error, setError] = useState("");

  useEffect(() => {
    // Función async interna para poder usar await
    async function load() {
      try {
        setLoading(true);
        setError("");

        const data = await getApod(); // pide a NASA
        setApod(data);                // guarda respuesta
      } catch (e) {
        setError("Error al cargar APOD. Intenta de nuevo.");
      } finally {
        setLoading(false);
      }
    }

    load();
  }, []);

  // Si está cargando, mostramos texto simple
  if (loading) return <p>Cargando APOD...</p>;

  // Si hay error, lo mostramos
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h2>Foto Astronómica del Día (NASA)</h2>

      {/* Título que viene de NASA */}
      <h3>{apod?.title}</h3>

      {/* Si es imagen, mostramos imagen */}
      {apod?.media_type === "image" && (
        <img
          src={apod?.url}
          alt={apod?.title}
          style={{ width: "100%", maxWidth: 900, borderRadius: 16 }}
        />
      )}

      {/* Si es video (a veces APOD es YouTube), mostramos link */}
      {apod?.media_type === "video" && (
        <a href={apod?.url} target="_blank" rel="noreferrer">
          Ver video
        </a>
      )}

      {/* Explicación */}
      <p style={{ color: "var(--muted)", lineHeight: 1.7 }}>
        {apod?.explanation}
      </p>
    </div>
  );
}
