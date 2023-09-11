import React from 'react';
import './AboutProject.css';
import Timeline from '../Timeline/Timeline';

function AboutProject() {
  return (
    <section className="about-project">
      <h2 className="about-project__title section-title" id="about-project">О проекте</h2>
      <ul className="about-project__list">
        <li className="about-project__item">
          <h3 className="about-project__diploma-title">Дипломный проект включал 5 этапов</h3>
          <p className="about-project__text">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
        </li>
        <li className="about-project__item">
          <h3 className="about-project__diploma-title">На выполнение диплома ушло 5 недель</h3>
          <p className="about-project__text">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
        </li>
      </ul>
      <Timeline />
    </section>
  );
}

export default AboutProject;
