import { BASE_URL } from './constans';

function fetchData({
  endpoint,
  method = 'GET',
  extraHeaders = {},
  data = null,
}) {
  const options = {
    method,
    headers: { ...extraHeaders, 'Content-Type': 'application/json' },
    body: method !== 'GET' ? JSON.stringify(data) : null,
  };
  const requestUrl = `${BASE_URL}${endpoint}`;
  return fetch(requestUrl, options)
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(new Error(`Error: ${res.status} ${res.statusText}`));
    });
}

export default function getMovies() {
  const endpoint = '/beatfilm-movies';
  return fetchData({ endpoint });
}
