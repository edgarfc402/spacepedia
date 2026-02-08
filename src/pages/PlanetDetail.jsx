import { useParams } from "react-router-dom";
import { planets } from "../data/planets";

export default function PlanetDetail() {
  const { id } = useParams();
  const planet = planets.find(p => p.id === id);

  if (!planet) return <p>Planeta no encontrado.</p>;

  return (
    <div>
      <h2>{planet.name}</h2>
      <p>{planet.description}</p>
      <p><strong>Distancia al Sol:</strong> {planet.distance}</p>
    </div>
  );
}
