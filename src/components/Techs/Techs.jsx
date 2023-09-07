import React from 'react';
import './Techs.css';

function Techs() {
  return (
    <div className="container_theme_gray">
      <section className="techs">
        <h2 className="techs__title section-title">Технологии</h2>
        <h3 className="techs__subheader">7 технологий</h3>
        <p className="techs__caption">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
        <ul className="tech__tags">
          <li className="tech__tag">HTML</li>
          <li className="tech__tag">CSS</li>
          <li className="tech__tag">JS</li>
          <li className="tech__tag">React</li>
          <li className="tech__tag">Git</li>
          <li className="tech__tag">Express.js</li>
          <li className="tech__tag">mongoDB</li>
        </ul>
      </section>
    </div>
  );
}

export default Techs;
