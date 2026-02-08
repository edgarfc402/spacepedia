import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="nav">
      <div className="nav__inner">
        <strong>Spacepedia 🚀</strong>

        <nav className="nav__links">
          <NavLink className="link" to="/">Inicio</NavLink>
          <NavLink className="link" to="/planets">Planetas</NavLink>
          <NavLink className="link" to="/apod">APOD</NavLink>
          <NavLink className="link" to="/favorites">Favoritos</NavLink>
        </nav>
      </div>
    </header>
  );
}
