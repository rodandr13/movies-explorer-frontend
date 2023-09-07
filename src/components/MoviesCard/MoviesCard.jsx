import React from 'react';
import './MoviesCard.css';
import { useLocation } from 'react-router-dom';
import RemoveCardButton from '../RemoveCardButton/RemoveCardButton';
import LikeButton from '../LikeButton/LikeButton';

function MoviesCard({
  name, image, duration, isLiked,
}) {
  const location = useLocation();
  const isSavedMoviesPage = location.pathname === '/saved-movies';
  return (
    <li className="movies-card">
      <img className="movies-card__image" src={image} alt="" />
      <div className="movies-card__container">
        <h3 className="movies-card__title">{name}</h3>
        {isSavedMoviesPage ? <RemoveCardButton /> : <LikeButton isLiked={isLiked} />}
      </div>
      <p className="movies-card__duration">{duration}</p>
    </li>
  );
}

export default MoviesCard;
