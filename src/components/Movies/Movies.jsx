import React, { useCallback, useEffect, useState } from 'react';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import getMovies from '../../utils/MoviesApi';
import Preloader from '../Preloader/Preloader';
import { filterMovies, getFromLocalStorage, setToLocalStorage } from '../../utils/utils';
import {
  ENTER_KEYWORD_MESSAGE, ERROR_MESSAGE,
  NOTHING_FOUND_MESSAGE,
  LOCAL_STORAGE_KEYS, SHORT_FILM_DURATION,
} from '../../utils/constants';

function Movies({ handleSavedMovie, handleDeleteMovie, savedMovies }) {
  const [movies, setMovies] = useState([]);
  const [searchError, setSearchError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const savedIsShortFilm = getFromLocalStorage(LOCAL_STORAGE_KEYS.IS_SHORT_FILM, false);
  const [isShortFilm, setIsShortFilm] = useState(savedIsShortFilm);
  const savedQuery = getFromLocalStorage(LOCAL_STORAGE_KEYS.QUERY, '');
  const [query, setQuery] = useState(savedQuery);

  useEffect(() => {
    setToLocalStorage(LOCAL_STORAGE_KEYS.IS_SHORT_FILM, isShortFilm);
    setToLocalStorage(LOCAL_STORAGE_KEYS.QUERY, query);
  }, [query, isShortFilm]);

  useEffect(() => {
    let currentMovies = getFromLocalStorage(LOCAL_STORAGE_KEYS.SAVED_MOVIES, []);
    if (isShortFilm) {
      currentMovies = currentMovies.filter((movie) => movie.duration <= SHORT_FILM_DURATION);
    }
    setMovies(currentMovies);
  }, [isShortFilm]);

  const handleSubmit = (submittedQuery, currentIsShortFilm) => {
    if (!submittedQuery.trim()) {
      setSearchError(ENTER_KEYWORD_MESSAGE);
      return;
    }
    setQuery(submittedQuery);
    setIsLoading((prevState) => !prevState);

    getMovies()
      .then((allMovies) => {
        const filteredMovies = filterMovies(allMovies, submittedQuery, currentIsShortFilm);
        if (filteredMovies.length === 0) {
          setSearchError(NOTHING_FOUND_MESSAGE);
          return;
        }
        setMovies(filteredMovies);
        setToLocalStorage(LOCAL_STORAGE_KEYS.SAVED_MOVIES, filteredMovies);
        setSearchError('');
      })
      .catch(() => {
        setSearchError(ERROR_MESSAGE);
      })
      .finally(() => {
        setIsLoading((prevState) => !prevState);
      });
  };

  useEffect(() => {
    const localSavedMovies = getFromLocalStorage(LOCAL_STORAGE_KEYS.SAVED_MOVIES);
    if (localSavedMovies && localSavedMovies.length > 0) {
      setMovies(localSavedMovies);
    } else if (query) {
      handleSubmit(query, isShortFilm);
    }
  }, []);

  const handleFilterChangeCallback = useCallback((newIsShortFilm) => {
    setIsShortFilm(newIsShortFilm);
    if (query) {
      handleSubmit(query, newIsShortFilm);
    } else {
      setSearchError(ENTER_KEYWORD_MESSAGE);
    }
  }, [query]);

  return (
    <main className="movies">
      <SearchForm
        onSubmit={handleSubmit}
        isShortFilm={isShortFilm}
        setIsShortFilm={setIsShortFilm}
        query={query}
        onFilterChange={handleFilterChangeCallback}
      />
      {isLoading
        ? <Preloader />
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
