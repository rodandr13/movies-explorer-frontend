import React from 'react';
import PropTypes from 'prop-types';
import './LikeButton.css';

function LikeButton({ isLiked }) {
  return (
    <button className={`movies-card__like ${isLiked ? 'movies-card__like_is-liked' : ''}`} type="button" aria-label="Нравится" />
  );
}

LikeButton.propTypes = {
  isLiked: PropTypes.bool.isRequired,
};
export default LikeButton;
