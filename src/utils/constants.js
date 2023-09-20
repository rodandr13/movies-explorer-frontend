export const BASE_URL = 'https://api.nomoreparties.co';
export const API_BACKEND_URL = 'https://api.backend.nomoreparties.co';
export const DEV_BACKEND_LOCALHOST = 'http://127.0.0.1:3001';
export const LOCAL_STORAGE_KEYS = {
  SAVED_IS_SHORT_FILM: 'saved_isShortFilm',
  SAVED_QUERY: 'saved_query',
  IS_SHORT_FILM: 'isShortFilm',
  QUERY: 'query',
  SAVED_MOVIES: 'savedMovies',
};
export const NOTHING_FOUND_MESSAGE = 'Ничего не найдено';
export const ENTER_KEYWORD_MESSAGE = 'Нужно ввести ключевое слово';
export const ERROR_MESSAGE = 'Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз';
export const SHORT_FILM_DURATION = 40;
export const SCREEN_CONFIG = {
  LARGE: { initial: 16, additional: 4 },
  MEDIUM: { initial: 12, additional: 3 },
  SMALL: { initial: 8, additional: 2 },
  XSMALL: { initial: 5, additional: 1 },
};
export const SCREEN_WIDTH = {
  LARGE: 1200,
  MEDIUM: 900,
  SMALL: 600,
};
export const PATHS = {
  MOVIES: '/movies',
  SAVED_MOVIES: '/saved-movies',
};
export const RESIZE_DEBOUNCE_TIME = 100;
export const ROUTES_WITH_HEADER_FOOTER = ['/', '/movies', '/saved-movies'];
