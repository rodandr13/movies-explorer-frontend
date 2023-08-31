import React from "react";
import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox'
function SearchForm() {
    return (
        <section className='search-form'>
            <form className='search-form__form' action="#">
                <div className="search-form__container">
                    <input className='search-form__input' type="text" placeholder='Фильм'/>
                    <button className='search-form__submit' type='submit'>Найти</button>
                </div>
                <FilterCheckbox />
            </form>
        </section>
    )
}

export default SearchForm;