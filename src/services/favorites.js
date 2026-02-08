const KEY = "spacepedia:favorites"; // nombre bajo el que guardamos en localStorage

// Lee favoritos (si no hay, regresa [])
export function getFavorites() {
  return JSON.parse(localStorage.getItem(KEY) || "[]");
}

// Guarda favoritos
function saveFavorites(list) {
  localStorage.setItem(KEY, JSON.stringify(list));
}

// Agrega un favorito (si ya existe, no lo duplica)
export function addFavorite(item) {
  const current = getFavorites();
  const exists = current.some((x) => x.id === item.id);

  if (!exists) {
    saveFavorites([...current, item]);
  }
}

// Elimina un favorito por id
export function removeFavorite(id) {
  const current = getFavorites();
  const next = current.filter((x) => x.id !== id);
  saveFavorites(next);
}

// Revisa si ya está en favoritos
export function isFavorite(id) {
  const current = getFavorites();
  return current.some((x) => x.id === id);
}
