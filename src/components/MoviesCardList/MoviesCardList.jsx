import React from 'react';
import './MoviesCardList.css';
import movieImage from '../../images/movie-img.jpg';

function MoviesCardList() {
  return (
    <section className="movies-card-list">
      <ul className="movies-card-list__list">
        <li className="movies-card movies-card-list__item">
          <img className="movies-card__image" src={movieImage} alt="" />
          <div className="movies-card__container">
            <h3 className="movies-card__title">33 слова о дизайне</h3>
            <button className="movies-card__like" type="button" aria-label="Нравится" />
          </div>
          <p className="movies-card__duration">1ч 42м</p>
        </li>
        <li className="movies-card movies-card-list__item">
          <img className="movies-card__image" src={movieImage} alt="" />
          <div className="movies-card__container">
            <h3 className="movies-card__title">33 слова о дизайне</h3>
            <button className="movies-card__like" type="button" aria-label="Нравится" />
          </div>
          <p className="movies-card__duration">1ч 42м</p>
        </li>
        <li className="movies-card movies-card-list__item">
          <img className="movies-card__image" src={movieImage} alt="" />
          <div className="movies-card__container">
            <h3 className="movies-card__title">33 слова о дизайне</h3>
            <button className="movies-card__like" type="button" aria-label="Нравится" />
          </div>
          <p className="movies-card__duration">1ч 42м</p>
        </li>
        <li className="movies-card movies-card-list__item">
          <img className="movies-card__image" src={movieImage} alt="" />
          <div className="movies-card__container">
            <h3 className="movies-card__title">33 слова о дизайне</h3>
            <button className="movies-card__like" type="button" aria-label="Нравится" />
          </div>
          <p className="movies-card__duration">1ч 42м</p>
        </li>
        <li className="movies-card movies-card-list__item">
          <img className="movies-card__image" src={movieImage} alt="" />
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
