import React from 'react';
import './AboutMe.css';
import avatar from '../../images/avatar.jpg';

function AboutMe() {
  return (
    <section className="about-me">
      <h2 className="about-me__title section-title">Студент</h2>
      <div className="about-me__container">
        <h3 className="about-me__subtitle">Виталий</h3>
        <p className="about-me__caption">Фронтенд-разработчик, 30 лет</p>
        <p className="section-text">
          Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена
          и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года
          работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал
          заниматься фриланс-заказами и ушёл с постоянной работы.
        </p>
        <a href="#" className="about-me__link">Github</a>
      </div>
      <img src={avatar} alt="" className="about-me__avatar" />
    </section>
  );
}

export default AboutMe;
