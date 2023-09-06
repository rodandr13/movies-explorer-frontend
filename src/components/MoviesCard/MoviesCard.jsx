import React from 'react';
import './MoviesCard.css';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import RemoveCardButton from '../RemoveCardButton/RemoveCardButton';
import LikeButton from '../LikeButton/LikeButton';

function MoviesCard({
  name, image, duration, isLiked,
}) {
  const location = useLocation();
  const isSavedMoviesPage = location.pathname === '/saved-movies';
  return (
    <li className="movies-card movies-card-list__item">
      <img className="movies-card__image" src={image} alt="" />
      <div className="movies-card__container">
        <h3 className="movies-card__title">{name}</h3>
        {isSavedMoviesPage ? <RemoveCardButton /> : <LikeButton isLiked={isLiked} />}
      </div>
      <p className="movies-card__duration">{duration}</p>
    </li>
  );
}

MoviesCard.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  duration: PropTypes.string.isRequired,
  isLiked: PropTypes.bool.isRequired,
};

export default MoviesCard;
