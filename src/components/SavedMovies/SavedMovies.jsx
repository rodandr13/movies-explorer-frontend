import React, { useState, useEffect, useCallback } from 'react';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import { filterMovies } from '../../utils/utils';

function SavedMovies({ movies: savedMovies, handleDeleteMovie }) {
  const [filteredMovies, setFilteredMovies] = useState(savedMovies);
  const [searchError, setSearchError] = useState('');
  const savedIsShortFilm = localStorage.getItem('saved_isShortFilm');
  const [isShortFilm, setIsShortFilm] = useState(
    savedIsShortFilm ? JSON.parse(savedIsShortFilm) : false,
  );
  const savedQuery = localStorage.getItem('saved_query');
  const [query, setQuery] = useState(savedQuery || '');

  useEffect(() => {
    localStorage.setItem('saved_isShortFilm', JSON.stringify(isShortFilm));
  }, [isShortFilm]);

  useEffect(() => {
    localStorage.setItem('saved_query', query);
  }, [query]);

  const handleSubmit = (submittedQuery, currentIsShortFilm) => {
    if (!submittedQuery.trim()) {
      setSearchError('Нужно ввести ключевое слово');
      return;
    }
    setQuery(submittedQuery);

    const newFilteredMovies = filterMovies(savedMovies, submittedQuery, currentIsShortFilm);

    if (newFilteredMovies.length === 0) {
      setSearchError('Ничего не найдено');
      return;
    }
    setFilteredMovies(newFilteredMovies);
    setSearchError('');
  };
  useEffect(() => {
    if (savedQuery || savedIsShortFilm) {
      handleSubmit(savedQuery, JSON.parse(savedIsShortFilm));
    }
  }, [savedMovies]);
  const handleFilterChangeCallback = useCallback((newIsShortFilm) => {
    setIsShortFilm(newIsShortFilm);
    if (query) {
      handleSubmit(query, newIsShortFilm);
    }
  }, [query, handleSubmit]);

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
