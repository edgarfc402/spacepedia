import Card from "../components/Card";

export default function Home() {
  return (
    <div>
      {/* Encabezado (hero) */}
      <section className="hero">
        <h2 className="hero__title">Explora el espacio con Spacepedia 🚀</h2>
        <p className="hero__subtitle">
          Proyecto educativo en React: rutas, consumo de APIs de NASA, favoritos y diseño responsive.
        </p>
      </section>

      {/* Tarjetas de features */}
      <section className="grid">
        <Card
          title="Planetas"
          description="Explora información básica de cada planeta y aprende datos clave."
        />
        <Card
          title="APOD (NASA)"
          description="Muestra la Foto Astronómica del Día con su explicación."
        />
        <Card
          title="Favoritos"
          description="Guarda contenido que te guste usando localStorage."
        />
      </section>
    </div>
  );
}
