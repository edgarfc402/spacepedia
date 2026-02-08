// Lee la API key desde .env
const API_KEY = import.meta.env.VITE_NASA_API_KEY;

// Base URL de NASA
const BASE_URL = "https://api.nasa.gov";

// Función: trae la Astronomical Picture of the Day (APOD)
export async function getApod() {
  const url = `${BASE_URL}/planetary/apod?api_key=${API_KEY}`;

  const res = await fetch(url);

  // Si NASA responde con error (ej: 403, 500), lo lanzamos
  if (!res.ok) {
    throw new Error("No se pudo obtener APOD");
  }

  // Regresa JSON con { title, explanation, url, media_type, ... }
  return res.json();
}
