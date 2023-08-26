import React from "react";
import './Promo.css';
import promoImage from '../../images/promo_illustration.png';

function Promo() {
    return (
        <div className="container_theme_dark">
            <section className="promo">
                <div className="promo__text-container">
                    <h1 className="promo__title">Учебный проект студента факультета Веб&#8209;разработки.</h1>
                    <p className="promo__subtitle">Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
                    <a href="#" className="promo__link">Узнать больше</a>
                </div>
                <img src={promoImage} alt="" className="promo__illustration"/>
            </section>
        </div>
    )
}

export default Promo;