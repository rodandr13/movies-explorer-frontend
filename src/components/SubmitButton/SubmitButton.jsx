import React from "react";
import './SubmitButton.css';

function SubmitButton({text}) {
    return (
        <button className='register__submit' type='submit'>{text}</button>
    )
}

export default SubmitButton;