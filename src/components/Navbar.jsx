import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="nav"> {/* Barra superior fija */}
      <div className="nav__inner"> {/* Contenedor centrado */}

        {/* Logo / título */}
        <strong>Spacepedia 🚀</strong>

        {/* Menú de navegación */}
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

