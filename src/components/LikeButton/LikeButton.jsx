import React from 'react';
import './LikeButton.css';

function LikeButton({ isLiked }) {
  return (
    <button className={`like-button ${isLiked ? 'like-button_is-liked' : ''}`} type="button" aria-label="Нравится" />
  );
}

export default LikeButton;
