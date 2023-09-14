import React from 'react';
import './MoviesCardList.css';
import { useLocation } from 'react-router-dom';
import MoviesCard from '../MoviesCard/MoviesCard';
import { BASE_URL } from '../../utils/constans';
import convertDuration from '../../utils/utils';

function MoviesCardList({ movies, searchError }) {
  const location = useLocation();
  const isMoviesPage = location.pathname === '/movies';
  return (
    <section className="movies-card-list">
      {searchError ? (
        <p className="movies-card-list__error">{searchError}</p>
      ) : (
        <>
          <ul className="movies-card-list__list">
            {movies.map((movie) => (
              <MoviesCard
                name={movie.nameRU}
                image={`${BASE_URL}${movie.image.url}`}
                duration={convertDuration(movie.duration)}
                key={movie.id}
                isLiked={movie.isLiked}
              />
            ))}
          </ul>
          {isMoviesPage && <button className="movies-card-list__more-btn" type="button">Еще</button>}
        </>
      )}
    </section>
  );
}

export default MoviesCardList;
