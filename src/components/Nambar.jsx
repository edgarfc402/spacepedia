import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav style={{ 
      display: "flex", 
      gap: "16px", 
      padding: "16px", 
      background: "#0b1020",
      color: "white"
    }}>
      <Link to="/" style={{ color: "white", textDecoration: "none" }}>Inicio</Link>
      <Link to="/planets" style={{ color: "white", textDecoration: "none" }}>Planetas</Link>
      <Link to="/apod" style={{ color: "white", textDecoration: "none" }}>APOD</Link>
      <Link to="/favorites" style={{ color: "white", textDecoration: "none" }}>Favoritos</Link>
    </nav>
  );
}
