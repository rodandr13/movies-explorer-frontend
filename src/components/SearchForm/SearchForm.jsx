import React, { useState } from 'react';
import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchForm({ onSubmit }) {
  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(query);
  };
  const handleChange = (e) => {
    setQuery(e.target.value);
  };
  return (
    <section className="search-form">
      <form className="search-form__form" onSubmit={handleSubmit}>
        <div className="search-form__container">
          <input className="search-form__input" type="text" placeholder="Фильм" value={query} onChange={handleChange} />
          <button className="search-form__submit" type="submit">Найти</button>
        </div>
        <FilterCheckbox />
      </form>
    </section>
  );
}

export default SearchForm;
