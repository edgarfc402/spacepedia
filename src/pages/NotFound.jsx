import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div>
      <h2>404</h2>
      <p>Página no encontrada.</p>
      <Link to="/">Volver al inicio →</Link>
    </div>
  );
}
