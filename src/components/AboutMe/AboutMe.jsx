import React from 'react';
import './AboutMe.css';
import avatar from '../../images/avatar.jpg';

function AboutMe() {
  return (
    <section className="about-me">
      <h2 className="about-me__title section-title">Студент</h2>
      <div className="about-me__container">
        <div className="about-me__profile">
          <h3 className="about-me__name">Виталий</h3>
          <p className="about-me__info">Фронтенд-разработчик, 30 лет</p>
          <p className="about-me__bio">
            Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена
            и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года
            работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал
            заниматься фриланс-заказами и ушёл с постоянной работы.
          </p>
          <a href="https://github.com/rodandr13" target="_blank" rel="noreferrer" className="about-me__link">Github</a>
        </div>
        <img src={avatar} alt="Аватар Виталия" className="about-me__avatar" />
      </div>
    </section>
  );
}

export default AboutMe;
