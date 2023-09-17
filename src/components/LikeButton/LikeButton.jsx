import React from 'react';
import './LikeButton.css';

function LikeButton({
  movie, isLiked, handleSavedMovie, handleDeleteMovie,
}) {
  const onSavedMovie = () => {
    handleSavedMovie(movie);
  };
  const onDeleteMovie = () => {
    handleDeleteMovie(movie);
  };
  return (
    <button onClick={isLiked ? onDeleteMovie : onSavedMovie} className={`like-button ${isLiked ? 'like-button_is-liked' : ''}`} type="button" aria-label="Нравится" />
  );
}

export default LikeButton;
