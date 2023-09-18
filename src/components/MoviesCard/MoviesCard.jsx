import React from 'react';
import './MoviesCard.css';
import { useLocation } from 'react-router-dom';
import RemoveCardButton from '../RemoveCardButton/RemoveCardButton';
import LikeButton from '../LikeButton/LikeButton';

function MoviesCard({
  movie,
  name,
  image,
  duration,
  handleSavedMovie,
  savedMovies,
  handleDeleteMovie,
}) {
  const location = useLocation();
  const isMoviesPage = location.pathname === '/movies';
  const isSavedMoviesPage = location.pathname === '/saved-movies';
  const isLiked = isMoviesPage && savedMovies.some((savedMovie) => movie.id === savedMovie.movieId);
  return (
    <li className="movies-card">
      <img className="movies-card__image" src={image} alt="" />
      <div className="movies-card__container">
        <h3 className="movies-card__title">{name}</h3>
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
      <p className="movies-card__duration">{duration}</p>
    </li>
  );
}

export default MoviesCard;
