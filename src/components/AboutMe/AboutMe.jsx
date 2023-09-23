import React from 'react';
import './AboutMe.css';
import { USER_INFO } from '../../utils/constants';

function AboutMe() {
  return (
    <section className="about-me">
      <h2 className="about-me__title section-title">Студент</h2>
      <div className="about-me__container">
        <div className="about-me__profile">
          <h3 className="about-me__name">{USER_INFO.name}</h3>
          <p className="about-me__info">{USER_INFO.role}</p>
          <p className="about-me__bio">{USER_INFO.bio}</p>
          <a href={USER_INFO.githubLink} target="_blank" rel="noreferrer" className="about-me__link">Github</a>
        </div>
        <img src={USER_INFO.avatarLink} alt="Аватар Виталия" className="about-me__avatar" />
      </div>
    </section>
  );
}

export default AboutMe;
