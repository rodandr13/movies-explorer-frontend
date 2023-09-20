import React, { useState, useEffect, useCallback } from 'react';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import { filterMovies, getFromLocalStorage, setToLocalStorage } from '../../utils/utils';
import {
  ENTER_KEYWORD_MESSAGE,
  NOTHING_FOUND_MESSAGE,
  LOCAL_STORAGE_KEYS,
} from '../../utils/constants';

function SavedMovies({ movies, handleDeleteMovie }) {
  const [filteredMovies, setFilteredMovies] = useState(movies);
  const [searchError, setSearchError] = useState('');
  const savedIsShortFilm = getFromLocalStorage(LOCAL_STORAGE_KEYS.SAVED_IS_SHORT_FILM, false);
  const [isShortFilm, setIsShortFilm] = useState(savedIsShortFilm);

  const savedQuery = getFromLocalStorage(LOCAL_STORAGE_KEYS.SAVED_QUERY, '');
  const [query, setQuery] = useState(savedQuery);

  const applyFilters = useCallback((queryValue, isShortFilmValue) => {
    const resultMovies = filterMovies(movies, queryValue, isShortFilmValue);
    if (resultMovies.length === 0) {
      setSearchError(NOTHING_FOUND_MESSAGE);
    } else {
      setFilteredMovies(resultMovies);
      setSearchError('');
    }
  }, [movies]);

  const handleSubmit = (submittedQuery, currentIsShortFilm) => {
    if (!submittedQuery.trim()) {
      if (movies.length > 0) {
        setFilteredMovies(movies);
        setSearchError('');
      } else {
        setSearchError(ENTER_KEYWORD_MESSAGE);
      }
      return;
    }
    setQuery(submittedQuery);
    applyFilters(submittedQuery, currentIsShortFilm);
  };

  useEffect(() => {
    setToLocalStorage(LOCAL_STORAGE_KEYS.SAVED_IS_SHORT_FILM, isShortFilm);
    setToLocalStorage(LOCAL_STORAGE_KEYS.SAVED_QUERY, query);
  }, [isShortFilm, query]);

  useEffect(() => {
    if (savedQuery || savedIsShortFilm) {
      applyFilters(savedQuery, JSON.parse(savedIsShortFilm));
    } else {
      setFilteredMovies(movies);
      setSearchError('');
    }
  }, [movies, savedQuery, savedIsShortFilm, applyFilters]);

  const handleFilterChangeCallback = useCallback((newIsShortFilm) => {
    setIsShortFilm(newIsShortFilm);
    applyFilters(query, newIsShortFilm);
  }, [query, applyFilters]);

  return (
    <main className="saved-movies">
      <SearchForm
        onSubmit={handleSubmit}
        isShortFilm={isShortFilm}
        setIsShortFilm={setIsShortFilm}
        query={query}
        onFilterChange={handleFilterChangeCallback}
      />
      <MoviesCardList
        movies={filteredMovies}
        handleDeleteMovie={handleDeleteMovie}
        searchError={searchError}
      />
    </main>
  );
}

export default SavedMovies;
