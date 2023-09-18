import React from 'react';
import './RemoveCardButton.css';

function RemoveCardButton({ handleDeleteMovie, movie }) {
  const onDeleteMovie = () => {
    handleDeleteMovie(movie);
  };
  return (
    <button className="remove-card-button" type="button" aria-label="Удалить" onClick={onDeleteMovie} />
  );
}

export default RemoveCardButton;
