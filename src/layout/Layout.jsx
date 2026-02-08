import Navbar from "../components/Nambar";

export default function Layout({ children }) {
  return (
    <div>
      <Navbar />

      <main style={{ padding: "24px", minHeight: "80vh" }}>
        {children}
      </main>

      <footer style={{ 
        textAlign: "center", 
        padding: "16px", 
        background: "#0b1020", 
        color: "white"
      }}>
        Spacepedia © {new Date().getFullYear()}
      </footer>
    </div>
  );
}
