import React from 'react';
import './LikeButton.css';
import { LIKE_BUTTON_STYLES } from '../../utils/constants';

function LikeButton({
  movie, isLiked, handleSavedMovie, handleDeleteMovie,
}) {
  const buttonClassName = `${LIKE_BUTTON_STYLES.BASE} ${isLiked ? LIKE_BUTTON_STYLES.LIKED : ''}`;
  const onSavedMovie = (e) => {
    e.preventDefault();
    handleSavedMovie(movie);
  };
  const onDeleteMovie = (e) => {
    e.preventDefault();
    handleDeleteMovie(movie);
  };
  return (
    <button onClick={isLiked ? onDeleteMovie : onSavedMovie} className={buttonClassName} type="button" aria-label="Нравится" />
  );
}

export default LikeButton;
