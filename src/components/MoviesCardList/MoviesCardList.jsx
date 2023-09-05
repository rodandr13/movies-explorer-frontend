import React from 'react';
import './MoviesCardList.css';
import movieImage1 from '../../images/movie-img.jpg';
import movieImage2 from '../../images/movie-img-2.jpg';
import movieImage3 from '../../images/movie-img-3.jpg';
import movieImage4 from '../../images/movie-img-4.jpg';

function MoviesCardList() {
  return (
    <section className="movies-card-list">
      <ul className="movies-card-list__list">
        <li className="movies-card movies-card-list__item">
          <img className="movies-card__image" src={movieImage1} alt="" />
          <div className="movies-card__container">
            <h3 className="movies-card__title">33 слова о дизайне</h3>
            <button className="movies-card__like" type="button" aria-label="Нравится" />
          </div>
          <p className="movies-card__duration">1ч 42м</p>
        </li>
        <li className="movies-card movies-card-list__item">
          <img className="movies-card__image" src={movieImage2} alt="" />
          <div className="movies-card__container">
            <h3 className="movies-card__title">Киноальманах «100 лет дизайна»</h3>
            <button className="movies-card__like" type="button" aria-label="Нравится" />
          </div>
          <p className="movies-card__duration">1ч 42м</p>
        </li>
        <li className="movies-card movies-card-list__item">
          <img className="movies-card__image" src={movieImage3} alt="" />
          <div className="movies-card__container">
            <h3 className="movies-card__title">В погоне за Бенкси</h3>
            <button className="movies-card__like" type="button" aria-label="Нравится" />
          </div>
          <p className="movies-card__duration">1ч 42м</p>
        </li>
        <li className="movies-card movies-card-list__item">
          <img className="movies-card__image" src={movieImage4} alt="" />
          <div className="movies-card__container">
            <h3 className="movies-card__title">Баския: Взрыв реальности</h3>
            <button className="movies-card__like" type="button" aria-label="Нравится" />
          </div>
          <p className="movies-card__duration">1ч 42м</p>
        </li>
        <li className="movies-card movies-card-list__item">
          <img className="movies-card__image" src={movieImage1} alt="" />
          <div className="movies-card__container">
            <h3 className="movies-card__title">33 слова о дизайне</h3>
            <button className="movies-card__like" type="button" aria-label="Нравится" />
          </div>
          <p className="movies-card__duration">1ч 42м</p>
        </li>
        <li className="movies-card movies-card-list__item">
          <img className="movies-card__image" src={movieImage1} alt="" />
          <div className="movies-card__container">
            <h3 className="movies-card__title">33 слова о дизайне</h3>
            <button className="movies-card__like" type="button" aria-label="Нравится" />
          </div>
          <p className="movies-card__duration">1ч 42м</p>
        </li>
        <li className="movies-card movies-card-list__item">
          <img className="movies-card__image" src={movieImage1} alt="" />
          <div className="movies-card__container">
            <h3 className="movies-card__title">33 слова о дизайне</h3>
            <button className="movies-card__like" type="button" aria-label="Нравится" />
          </div>
          <p className="movies-card__duration">1ч 42м</p>
        </li>
        <li className="movies-card movies-card-list__item">
          <img className="movies-card__image" src={movieImage1} alt="" />
          <div className="movies-card__container">
            <h3 className="movies-card__title">Gimme Danger: История Игги и The Stooges</h3>
            <button className="movies-card__like" type="button" aria-label="Нравится" />
          </div>
          <p className="movies-card__duration">1ч 42м</p>
        </li>
        <li className="movies-card movies-card-list__item">
          <img className="movies-card__image" src={movieImage1} alt="" />
          <div className="movies-card__container">
            <h3 className="movies-card__title">33 слова о дизайне</h3>
            <button className="movies-card__like" type="button" aria-label="Нравится" />
          </div>
          <p className="movies-card__duration">1ч 42м</p>
        </li>
        <li className="movies-card movies-card-list__item">
          <img className="movies-card__image" src={movieImage1} alt="" />
          <div className="movies-card__container">
            <h3 className="movies-card__title">33 слова о дизайне</h3>
            <button className="movies-card__like" type="button" aria-label="Нравится" />
          </div>
          <p className="movies-card__duration">1ч 42м</p>
        </li>
        <li className="movies-card movies-card-list__item">
          <img className="movies-card__image" src={movieImage1} alt="" />
          <div className="movies-card__container">
            <h3 className="movies-card__title">33 слова о дизайне</h3>
            <button className="movies-card__like" type="button" aria-label="Нравится" />
          </div>
          <p className="movies-card__duration">1ч 42м</p>
        </li>
        <li className="movies-card movies-card-list__item">
          <img className="movies-card__image" src={movieImage1} alt="" />
          <div className="movies-card__container">
            <h3 className="movies-card__title">33 слова о дизайне</h3>
            <button className="movies-card__like" type="button" aria-label="Нравится" />
          </div>
          <p className="movies-card__duration">1ч 42м</p>
        </li>
        <li className="movies-card movies-card-list__item">
          <img className="movies-card__image" src={movieImage1} alt="" />
          <div className="movies-card__container">
            <h3 className="movies-card__title">33 слова о дизайне</h3>
            <button className="movies-card__like" type="button" aria-label="Нравится" />
          </div>
          <p className="movies-card__duration">1ч 42м</p>
        </li>
        <li className="movies-card movies-card-list__item">
          <img className="movies-card__image" src={movieImage1} alt="" />
          <div className="movies-card__container">
            <h3 className="movies-card__title">33 слова о дизайне</h3>
            <button className="movies-card__like" type="button" aria-label="Нравится" />
          </div>
          <p className="movies-card__duration">1ч 42м</p>
        </li>
      </ul>
      <button className="movies-card-list__more-btn" type="button">Еще</button>
    </section>
  );
}

export default MoviesCardList;
