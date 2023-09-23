export function fetchData({
  endpoint,
  method = 'GET',
  extraHeaders = {},
  data = null,
  useCredentials = false,
}) {
  const options = {
    method,
    headers: { ...extraHeaders, 'Content-Type': 'application/json' },
    body: (method !== 'GET' && method !== 'DELETE') ? JSON.stringify(data) : null,
  };
  if (useCredentials) {
    options.credentials = 'include';
  }
  return fetch(endpoint, options)
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      return res.json().then((error) => {
        throw new Error(error.message || 'Что-то пошло не так');
      });
    });
}

export function convertDuration(time) {
  const hours = Math.floor(time / 60);
  const minutes = time % 60;
  return `${hours}ч ${minutes}м`;
}

export const filterMovies = (allMovies, searchQuery, currentShortFilm) => {
  let filteredMovies = allMovies.filter(
    (movie) => movie.nameRU.toLowerCase().includes(searchQuery.toLowerCase())
      || movie.nameEN.toLowerCase().includes(searchQuery.toLowerCase()),
  );
  if (currentShortFilm) {
    filteredMovies = filteredMovies.filter((movie) => movie.duration <= 40);
  }
  return filteredMovies;
};

export const getFromLocalStorage = (key, defaultValue) => {
  const value = localStorage.getItem(key);
  return value ? JSON.parse(value) : defaultValue;
};

export const setToLocalStorage = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};
