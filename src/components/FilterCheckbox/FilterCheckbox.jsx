import React from "react";
import './FilterCheckbox.css';

function FilterCheckbox() {
    return (
        <div className='filter-checkbox'>
            <input type="checkbox" id='filter-checkbox' className='filter-checkbox__input'/>
            <label className='filter-checkbox__label' htmlFor='filter-checkbox'>Короткометражки</label>
        </div>
    )
}

export default FilterCheckbox;