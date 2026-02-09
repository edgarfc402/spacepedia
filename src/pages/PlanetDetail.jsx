import { useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import { planets } from "../data/planets";
import { addFavorite, removeFavorite, isFavorite } from "../services/favorites";
import Button from "../components/Button";

export default function PlanetDetail() {
  const { id } = useParams();

  // Busca el planeta solo cuando cambia el id
  const planet = useMemo(
    () => planets.find((p) => p.id === id),
    [id]
  );

  // Estado para saber si está en favoritos
  const [fav, setFav] = useState(() => isFavorite(id));

  if (!planet) return <p>Planeta no encontrado.</p>;

  function toggleFavorite() {
    if (fav) {
      removeFavorite(planet.id);
      setFav(false);
    } else {
      addFavorite({
        id: planet.id,
        type: "planet",
        name: planet.name,
      });
      setFav(true);
    }
  }

  return (
    <div>
      <h2>{planet.name}</h2>
      <p>{planet.description}</p>
      <p>
        <strong>Distancia al Sol:</strong> {planet.distance}
      </p>

      <Button onClick={toggleFavorite} style={{ marginTop: 12 }}>
        {fav ? "Quitar de favoritos" : "Guardar en favoritos"}
      </Button>
    </div>
  );
}


