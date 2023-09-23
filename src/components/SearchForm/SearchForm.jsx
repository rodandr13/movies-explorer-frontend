import React, { useState } from 'react';
import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchForm({
  onSubmit, isShortFilm, setIsShortFilm, query, onFilterChange,
}) {
  const [inputQuery, setInputQuery] = useState(query || '');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(inputQuery, isShortFilm);
  };
  const handleChange = (e) => {
    setInputQuery(e.target.value);
  };
  return (
    <section className="search-form">
      <form className="search-form__form" onSubmit={handleSubmit}>
        <div className="search-form__container">
          <input
            className="search-form__input"
            type="text"
            placeholder="Фильм"
            value={inputQuery}
            onChange={handleChange}
          />
          <button className="search-form__submit" type="submit">Найти</button>
        </div>
        <FilterCheckbox
          isShortFilm={isShortFilm}
          setIsShortFilm={setIsShortFilm}
          onFilterChange={onFilterChange}
        />
      </form>
    </section>
  );
}

export default SearchForm;
