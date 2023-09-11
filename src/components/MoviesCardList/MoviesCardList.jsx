import React from 'react';
import './MoviesCardList.css';
import { useLocation } from 'react-router-dom';
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList({ movies }) {
  const location = useLocation();
  const isMoviesPage = location.pathname === '/movies';
  return (
    <section className="movies-card-list">
      <ul className="movies-card-list__list">
        {movies.map((movie) => (
          <MoviesCard
            name={movie.name}
            image={movie.image}
            duration={movie.duration}
            key={movie.id}
            isLiked={movie.isLiked}
          />
        ))}
      </ul>
      {isMoviesPage && <button className="movies-card-list__more-btn" type="button">Еще</button>}
    </section>
  );
}

export default MoviesCardList;
