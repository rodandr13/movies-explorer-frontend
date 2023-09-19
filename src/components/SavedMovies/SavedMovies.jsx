import React, { useState, useEffect, useCallback } from 'react';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import { filterMovies } from '../../utils/utils';

function SavedMovies({ movies, handleDeleteMovie }) {
  const [filteredMovies, setFilteredMovies] = useState(movies);
  const [searchError, setSearchError] = useState('');
  const savedIsShortFilm = localStorage.getItem('saved_isShortFilm');
  const [isShortFilm, setIsShortFilm] = useState(
    savedIsShortFilm ? JSON.parse(savedIsShortFilm) : false,
  );
  const savedQuery = localStorage.getItem('saved_query');
  const [query, setQuery] = useState(savedQuery || '');

  const applyFilters = useCallback((queryValue, isShortFilmValue) => {
    const resultMovies = filterMovies(movies, queryValue, isShortFilmValue);
    if (resultMovies.length === 0) {
      setSearchError('Ничего не найдено');
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
        setSearchError('Нужно ввести ключевое слово');
      }
      return;
    }
    setQuery(submittedQuery);
    applyFilters(submittedQuery, currentIsShortFilm);
  };

  useEffect(() => {
    localStorage.setItem('saved_isShortFilm', JSON.stringify(isShortFilm));
    localStorage.setItem('saved_query', query);
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
