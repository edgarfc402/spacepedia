import Navbar from "../components/Navbar";

export default function Layout({ children }) {
  return (
    <div>

      {/* Barra superior */}
      <Navbar />

      {/* Contenido dinámico de cada página */}
      <main className="container">
        {children}
      </main>

      {/* Pie de página */}
      <footer className="footer">
        Spacepedia © {new Date().getFullYear()}
      </footer>

    </div>
  );
}

