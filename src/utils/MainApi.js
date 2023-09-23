import { fetchData } from './utils';
import { API_BACKEND_URL } from './constants';

export const register = ({ name, email, password }) => {
  const endpoint = '/signup';
  return fetchData({
    endpoint: `${API_BACKEND_URL}${endpoint}`,
    method: 'POST',
    data: {
      name,
      password,
      email,
    },
    useCredentials: true,
  });
};

export const login = ({ email, password }) => {
  const endpoint = '/signin';
  return fetchData({
    endpoint: `${API_BACKEND_URL}${endpoint}`,
    method: 'POST',
    data: {
      password,
      email,
    },
    useCredentials: true,
  });
};

export const logout = () => {
  const endpoint = '/signout';
  return fetchData({
    endpoint: `${API_BACKEND_URL}${endpoint}`,
    useCredentials: true,
  });
};

export const getUserInfo = () => {
  const endpoint = '/users/me';
  return fetchData({
    endpoint: `${API_BACKEND_URL}${endpoint}`,
    useCredentials: true,
  });
};

export const editUserInfo = ({ name, email }) => {
  const endpoint = '/users/me';
  return fetchData({
    endpoint: `${API_BACKEND_URL}${endpoint}`,
    method: 'PATCH',
    useCredentials: true,
    data: {
      name,
      email,
    },
  });
};

export const checkAuth = () => {
  const endpoint = '/check-auth';
  return fetchData({
    endpoint: `${API_BACKEND_URL}${endpoint}`,
    useCredentials: true,
  });
};

export const addSavedMovie = ({
  country,
  director,
  duration,
  year,
  description,
  image,
  trailerLink,
  thumbnail,
  movieId,
  nameRU,
  nameEN,
}) => {
  const endpoint = '/movies';
  return fetchData({
    endpoint: `${API_BACKEND_URL}${endpoint}`,
    method: 'POST',
    useCredentials: true,
    data: {
      country,
      director,
      duration,
      year,
      description,
      image,
      trailerLink,
      thumbnail,
      movieId,
      nameRU,
      nameEN,
    },
  });
};

export const getSavedMovies = () => {
  const endpoint = '/movies';
  return fetchData({
    endpoint: `${API_BACKEND_URL}${endpoint}`,
    useCredentials: true,
  });
};

export const deleteSavedMovie = (movieId) => {
  const endpoint = '/movies';
  return fetchData({
    endpoint: `${API_BACKEND_URL}${endpoint}/${movieId}`,
    method: 'DELETE',
    useCredentials: true,
  });
};
