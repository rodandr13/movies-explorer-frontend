export function fetchData({
  endpoint,
  method = 'GET',
  extraHeaders = {},
  data = null,
}) {
  const options = {
    method,
    headers: { ...extraHeaders, 'Content-Type': 'application/json' },
    body: method !== 'GET' ? JSON.stringify(data) : null,
    credentials: 'include',
  };
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
