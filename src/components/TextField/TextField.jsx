import React from "react";
import './TextField.css';

function TextField({label}) {
    return (
        <label className='text-field'>
            <span className='text-field__title'>{label}</span>
            <input className='text-field__input' type="text" />
            <span className='text-field__error'></span>
        </label>
    )
}

export default TextField;