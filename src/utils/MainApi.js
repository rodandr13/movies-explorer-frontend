import { fetchData } from './utils';
import { DEV_BACKEND_LOCALHOST } from './constants';

export const register = ({ name, email, password }) => {
  const endpoint = '/signup';
  return fetchData({
    endpoint: `${DEV_BACKEND_LOCALHOST}${endpoint}`,
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
    endpoint: `${DEV_BACKEND_LOCALHOST}${endpoint}`,
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
    endpoint: `${DEV_BACKEND_LOCALHOST}${endpoint}`,
    useCredentials: true,
  });
};

export const getUserInfo = () => {
  const endpoint = '/users/me';
  return fetchData({
    endpoint: `${DEV_BACKEND_LOCALHOST}${endpoint}`,
    useCredentials: true,
  });
};

export const checkAuth = () => {
  const endpoint = '/check-auth';
  return fetchData({
    endpoint: `${DEV_BACKEND_LOCALHOST}${endpoint}`,
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
    endpoint: `${DEV_BACKEND_LOCALHOST}${endpoint}`,
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
    endpoint: `${DEV_BACKEND_LOCALHOST}${endpoint}`,
    useCredentials: true,
  });
};

export const deleteSavedMovie = (movieId) => {
  const endpoint = '/movies';
  return fetchData({
    endpoint: `${DEV_BACKEND_LOCALHOST}${endpoint}/${movieId}`,
    method: 'DELETE',
    useCredentials: true,
  });
};
