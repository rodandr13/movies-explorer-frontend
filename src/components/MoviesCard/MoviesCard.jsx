import React from 'react';
import './MoviesCard.css';
import { useLocation } from 'react-router-dom';
import RemoveCardButton from '../RemoveCardButton/RemoveCardButton';
import LikeButton from '../LikeButton/LikeButton';
import { BASE_URL, PATHS } from '../../utils/constants';
import { convertDuration } from '../../utils/utils';

function MoviesCard({
  movie,
  handleSavedMovie,
  savedMovies,
  handleDeleteMovie,
}) {
  const location = useLocation();
  const isMoviesPage = location.pathname === PATHS.MOVIES;
  const isSavedMoviesPage = location.pathname === PATHS.SAVED_MOVIES;
  const isLiked = isMoviesPage && savedMovies.some((savedMovie) => movie.id === savedMovie.movieId);
  return (
    <li className="movies-card">
      <a className="movies-card__link" href={movie.trailerLink} target="_blank" rel="noreferrer">
        <img className="movies-card__image" src={`${isMoviesPage ? BASE_URL : ''}${movie.image.url || movie.image}`} alt="{movie.name}" />
        <div className="movies-card__container">
          <h3 className="movies-card__title">{movie.name}</h3>
          {isSavedMoviesPage
            ? <RemoveCardButton handleDeleteMovie={handleDeleteMovie} movie={movie} />
            : (
              <LikeButton
                isLiked={isLiked}
                handleSavedMovie={handleSavedMovie}
                handleDeleteMovie={handleDeleteMovie}
                movie={movie}
              />
            )}
        </div>
        <p className="movies-card__duration">{convertDuration(movie.duration)}</p>
      </a>
    </li>
  );
}

export default MoviesCard;
