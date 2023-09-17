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
  });
};

export const logout = () => {
  const endpoint = '/signout';
  return fetchData({
    endpoint: `${DEV_BACKEND_LOCALHOST}${endpoint}`,
  });
};

export const checkAuth = () => {
  const endpoint = '/check-auth';
  return fetchData({
    endpoint: `${DEV_BACKEND_LOCALHOST}${endpoint}`,
  });
};
