import React, { useState } from 'react';
import './FilterCheckbox.css';

function FilterCheckbox() {
  const [isShortFilms, setIsShortFilms] = useState();
  function handleToggleFilter() {
    setIsShortFilms(!isShortFilms);
  }
  return (
    <div className="filter-checkbox">
      <label className="filter-checkbox__label" htmlFor="filter-checkbox">
        <input type="checkbox" id="filter-checkbox" className={`filter-checkbox__input ${isShortFilms ? 'filter-checkbox__input_active' : ''}`} onChange={handleToggleFilter} />
        <span className="filter-checkbox__caption">Короткометражки</span>
      </label>
    </div>
  );
}

export default FilterCheckbox;
