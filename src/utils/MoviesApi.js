import { BASE_URL } from './constants';
import { fetchData } from './utils';

export default function getMovies() {
  const endpoint = '/beatfilm-movies';
  return fetchData({ endpoint: `${BASE_URL}${endpoint}` });
}
