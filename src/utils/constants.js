import avatar from '../images/avatar.jpg';

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
  MAIN: '/',
  MOVIES: '/movies',
  SAVED_MOVIES: '/saved-movies',
  SIGNUP: '/signup',
  SIGNIN: '/signin',
  PROFILE: '/profile',
};
export const MENU_STYLES = {
  LINK_LIGHT: 'menu__link_style_light',
  LINK_DARK: 'menu__link_style_dark',
  PROFILE_LINK_DARK: 'profile-link_style_dark',
  PROFILE_LINK_LIGHT: 'profile-link_style_light',
  OPEN: 'menu__main_type_open',
  CLOSE: 'menu__main_type_close',
  MOBILE_ACTIVE: 'menu__link-mobile_active',
  LINK_ACTIVE: 'menu__link_active',
};
export const HAMBURGER_STYLES = {
  BUTTON_BASE: 'hamburger__button',
  BUTTON_CLOSE: 'hamburger__button_type_close',
  LINE_LIGHT: 'hamburger__button-line_style_light',
  LINE_DARK: 'hamburger__button-line_style_dark',
};
export const HEADER_STYLES = {
  CONTAINER_DARK: 'container_theme_dark',
  CONTAINER_LIGHT: 'container_theme_light',
};
export const LIKE_BUTTON_STYLES = {
  BASE: 'like-button',
  LIKED: 'like-button_is-liked',
};
export const RESIZE_DEBOUNCE_TIME = 100;
export const ROUTES_WITH_HEADER_FOOTER = ['/', '/movies', '/saved-movies'];
export const MOBILE_WIDTH = 800;
export const USER_INFO = {
  name: 'Виталий',
  role: 'Фронтенд-разработчик',
  age: 30,
  bio: `Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена
        и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года
        работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал
        заниматься фриланс-заказами и ушёл с постоянной работы.`,
  githubLink: 'https://github.com/rodandr13',
  avatarLink: avatar,
};
export const PORTFOLIO_LINKS = [
  {
    title: 'Статичный сайт',
    url: 'https://github.com/rodandr13/how-to-learn',
  },
  {
    title: 'Адаптивный сайт',
    url: 'https://github.com/rodandr13/mesto',
  },
  {
    title: 'Одностраничное приложение',
    url: 'https://github.com/rodandr13/react-mesto-auth',
  },
];
export const PRACTICUM_LINK = 'https://practicum.yandex.ru/';

export const EMAIL_REGEX = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
export const NAME_REGEX = /^[a-zA-Zа-яА-ЯёЁ0-9-_ ]+$/;
