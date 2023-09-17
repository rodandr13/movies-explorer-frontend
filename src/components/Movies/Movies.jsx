import React, { useCallback, useEffect, useState } from 'react';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
// import { movies } from '../../utils/constans';
import getMovies from '../../utils/MoviesApi';
import Preloader from '../Preloader/Preloader';

function Movies({ handleSavedMovie, handleDeleteMovie, savedMovies }) {
  const [movies, setMovies] = useState([]);
  const [searchError, setSearchError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const savedIsShortFilm = localStorage.getItem('isShortFilm');
  const [isShortFilm, setIsShortFilm] = useState(
    savedIsShortFilm ? JSON.parse(savedIsShortFilm) : false,
  );
  const savedQuery = localStorage.getItem('query');
  const [query, setQuery] = useState(savedQuery || '');
  useEffect(() => {
    localStorage.setItem('isShortFilm', JSON.stringify(isShortFilm));
  }, [isShortFilm]);
  useEffect(() => {
    localStorage.setItem('query', query);
  }, [query]);
  useEffect(() => {
    let currentMovies = JSON.parse(localStorage.getItem('savedMovies') || '[]');
    if (isShortFilm) {
      currentMovies = currentMovies.filter((movie) => movie.duration <= 40);
    }
    setMovies(currentMovies);
  }, [isShortFilm]);
  const handleSubmit = (submittedQuery, currentIsShortFilm) => {
    if (!submittedQuery.trim()) {
      setSearchError('Нужно ввести ключевое слово');
      return;
    }
    setQuery(submittedQuery);
    setIsLoading(true);
    getMovies()
      .then((allMovies) => {
        let filteredMovies = allMovies.filter(
          (movie) => movie.nameRU.toLowerCase().includes(submittedQuery.toLowerCase())
            || movie.nameEN.toLowerCase().includes(submittedQuery.toLowerCase()),
        );
        if (currentIsShortFilm) {
          filteredMovies = filteredMovies.filter((movie) => movie.duration <= 40);
        }
        if (filteredMovies.length === 0) {
          setSearchError('Ничего не найдено');
          return;
        }
        setMovies(filteredMovies);
        localStorage.setItem('savedMovies', JSON.stringify(filteredMovies));
        setSearchError('');
      })
      .catch(() => {
        setSearchError('Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз');
      })
      .finally(() => {
        setIsLoading(false);
      });
  };
  useEffect(() => {
    const localSavedMovies = localStorage.getItem('savedMovies');
    if (localSavedMovies) {
      setMovies(JSON.parse(localSavedMovies));
    }
    if (query) {
      handleSubmit(query, isShortFilm);
    }
  }, []);
  const handleFilterChangeCallback = useCallback((newIsShortFilm) => {
    setIsShortFilm(newIsShortFilm);
    if (query) {
      handleSubmit(query, newIsShortFilm);
    }
  }, [query, handleSubmit]);
  return (
    <main className="movies">
      <SearchForm
        onSubmit={handleSubmit}
        isShortFilm={isShortFilm}
        setIsShortFilm={setIsShortFilm}
        query={query}
        onFilterChange={handleFilterChangeCallback}
      />
      {isLoading ? <Preloader />
        : (
          <MoviesCardList
            movies={movies}
            savedMovies={savedMovies}
            searchError={searchError}
            handleDeleteMovie={handleDeleteMovie}
            handleSavedMovie={handleSavedMovie}
          />
        )}
    </main>
  );
}

export default Movies;
