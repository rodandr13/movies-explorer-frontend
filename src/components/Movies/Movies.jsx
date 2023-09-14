import React, { useEffect, useState } from 'react';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
// import { movies } from '../../utils/constans';
import getMovies from '../../utils/MoviesApi';
import Preloader from '../Preloader/Preloader';

function Movies() {
  const [movies, setMovies] = useState([]);
  const [searchError, setSearchError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const savedMovies = localStorage.getItem('savedMovies');
    if (savedMovies) {
      console.log('Есть ли в локал');
      setMovies(JSON.parse(savedMovies));
    }
  }, []);

  const handleSubmit = (query) => {
    if (!query.trim()) {
      setSearchError('Нужно ввести ключевое слово');
      return;
    }
    setIsLoading(true);
    getMovies()
      .then((allMovies) => {
        const filteredMovies = allMovies.filter(
          (movie) => movie.nameRU.toLowerCase().includes(query.toLowerCase())
            || movie.nameEN.toLowerCase().includes(query.toLowerCase()),
        );
        if (filteredMovies.length === 0) {
          setSearchError('Ничего не найдено');
          return;
        }
        setMovies(filteredMovies);
        localStorage.setItem('savedMovies', JSON.stringify(filteredMovies));
        setSearchError(null);
      })
      .catch(() => {
        setSearchError('Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз');
      })
      .finally(() => {
        setIsLoading(false);
      });
  };
  return (
    <main className="movies">
      <SearchForm onSubmit={handleSubmit} />
      {isLoading ? <Preloader /> : <MoviesCardList movies={movies} searchError={searchError} /> }
    </main>
  );
}

export default Movies;
