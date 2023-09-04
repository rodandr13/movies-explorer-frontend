import React from 'react';
import './Techs.css';

function Techs() {
  return (
    <div className="container_theme_light">
      <section className="techs">
        <h2 className="techs__title section-title">Технологии</h2>
        <h3 className="techs__subheader">7 технологий</h3>
        <p className="techs__caption">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
        <ul className="tech-tags">
          <li className="tech-tags__item">HTML</li>
          <li className="tech-tags__item">CSS</li>
          <li className="tech-tags__item">JS</li>
          <li className="tech-tags__item">React</li>
          <li className="tech-tags__item">Git</li>
          <li className="tech-tags__item">Express.js</li>
          <li className="tech-tags__item">mongoDB</li>
        </ul>
      </section>
    </div>
  );
}

export default Techs;
