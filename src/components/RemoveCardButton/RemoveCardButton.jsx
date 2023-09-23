import React from 'react';
import './RemoveCardButton.css';

function RemoveCardButton({ handleDeleteMovie, movie }) {
  const onDeleteMovie = (e) => {
    e.preventDefault();
    handleDeleteMovie(movie);
  };
  return (
    <button className="remove-card-button" type="button" aria-label="Удалить" onClick={onDeleteMovie} />
  );
}

export default RemoveCardButton;
