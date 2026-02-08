import Navbar from "../components/Navbar";

export default function Layout({ children }) {
  return (
    <div>
      <Navbar />

      <main className="container">{children}</main>

      <footer className="footer">
        Spacepedia © {new Date().getFullYear()}
      </footer>
    </div>
  );
}
