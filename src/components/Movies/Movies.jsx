import React, { useCallback, useEffect, useState } from 'react';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import getMovies from '../../utils/MoviesApi';
import Preloader from '../Preloader/Preloader';
import { filterMovies, getFromLocalStorage, setToLocalStorage } from '../../utils/utils';
import {
  ENTER_KEYWORD_MESSAGE, ERROR_MESSAGE,
  NOTHING_FOUND_MESSAGE,
  LOCAL_STORAGE_KEYS,
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
    const allMovies = getFromLocalStorage(LOCAL_STORAGE_KEYS.ALL_MOVIES);
    if (!allMovies) {
      setIsLoading(true);
      getMovies()
        .then((fetchedMovies) => {
          setToLocalStorage(LOCAL_STORAGE_KEYS.ALL_MOVIES, fetchedMovies);
          if (query) {
            const filteredMovies = filterMovies(fetchedMovies, query, isShortFilm);
            setMovies(filteredMovies);
            setSearchError(filteredMovies.length ? '' : NOTHING_FOUND_MESSAGE);
          }
        })
        .catch(() => setSearchError(ERROR_MESSAGE))
        .finally(() => setIsLoading(false));
    } else if (query) {
      const filteredMovies = filterMovies(allMovies, query, isShortFilm);
      setMovies(filteredMovies);
      setSearchError(filteredMovies.length ? '' : NOTHING_FOUND_MESSAGE);
    }
  }, []);

  const handleSubmit = (submittedQuery, currentIsShortFilm) => {
    if (!submittedQuery.trim()) {
      setSearchError(ENTER_KEYWORD_MESSAGE);
      return;
    }
    setQuery(submittedQuery);
    const allMovies = getFromLocalStorage(LOCAL_STORAGE_KEYS.ALL_MOVIES, []);
    const filteredMovies = filterMovies(allMovies, submittedQuery, currentIsShortFilm);
    setMovies(filteredMovies);
    setSearchError(filteredMovies.length ? '' : NOTHING_FOUND_MESSAGE);
  };

  const handleFilterChangeCallback = useCallback((newIsShortFilm) => {
    setIsShortFilm(newIsShortFilm);
    if (query) {
      let currentMovies = getFromLocalStorage(LOCAL_STORAGE_KEYS.ALL_MOVIES, []);
      currentMovies = filterMovies(currentMovies, query, newIsShortFilm);
      setMovies(currentMovies);
      setSearchError(currentMovies.length ? '' : NOTHING_FOUND_MESSAGE);
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
