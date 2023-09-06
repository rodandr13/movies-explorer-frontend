import React from 'react';
import './SavedMovies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import { savedMovies } from '../../utils/constans';

function SavedMovies() {
  return (
    <section className="saved-movies">
      <SearchForm />
      <MoviesCardList movies={savedMovies} />
    </section>
  );
}

export default SavedMovies;
