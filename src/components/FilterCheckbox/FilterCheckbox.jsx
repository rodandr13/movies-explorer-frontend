import React from 'react';
import './FilterCheckbox.css';

function FilterCheckbox({ isShortFilm, setIsShortFilm, onFilterChange }) {
  function handleToggleFilter() {
    setIsShortFilm(!isShortFilm);
    if (onFilterChange) {
      onFilterChange(!isShortFilm);
    }
  }

  return (
    <section className="filter-checkbox">
      <label className="filter-checkbox__label" htmlFor="filter-checkbox">
        <input
          type="checkbox"
          id="filter-checkbox"
          className={`filter-checkbox__input ${isShortFilm ? 'filter-checkbox__input_active' : ''}`}
          onChange={handleToggleFilter}
          checked={isShortFilm}
        />
        <span className="filter-checkbox__caption">Короткометражки</span>
      </label>
    </section>
  );
}

export default FilterCheckbox;
