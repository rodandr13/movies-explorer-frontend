import movieImage1 from '../images/movie-img.jpg';
import movieImage2 from '../images/movie-img-2.jpg';
import movieImage3 from '../images/movie-img-3.jpg';
import movieImage4 from '../images/movie-img-4.jpg';
import movieImage5 from '../images/movie-img-5.jpg';
import movieImage6 from '../images/movie-img-6.jpg';

export const BASE_URL = 'https://api.nomoreparties.co';

export const movies = [
  {
    id: 1,
    name: '33 слова о дизайне',
    image: movieImage1,
    duration: '1ч 42м',
    isLiked: true,
  },
  {
    id: 2,
    name: 'Киноальманах «100 лет дизайна»',
    image: movieImage2,
    duration: '1ч 42м',
    isLiked: true,
  },
  {
    id: 3,
    name: 'Gimme Danger: История Игги и The Stooges',
    image: movieImage3,
    duration: '1ч 42м',
    isLiked: false,
  },
  {
    id: 4,
    name: 'Баския: Взрыв реальности',
    image: movieImage4,
    duration: '1ч 42м',
    isLiked: false,
  },
  {
    id: 5,
    name: 'Бег это свобода',
    image: movieImage5,
    duration: '1ч 42м',
    isLiked: false,
  },
  {
    id: 6,
    name: 'Когда я думаю о Германии ночью',
    image: movieImage6,
    duration: '1ч 42м',
    isLiked: false,
  },
];

export const savedMovies = [
  {
    id: 1,
    name: '33 слова о дизайне',
    image: movieImage1,
    duration: '1ч 42м',
    isLiked: true,
  },
  {
    id: 2,
    name: 'Киноальманах «100 лет дизайна»',
    image: movieImage2,
    duration: '1ч 42м',
    isLiked: true,
  },
];
