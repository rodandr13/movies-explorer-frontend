import React from 'react';
import './Footer.css';
import { PRACTICUM_LINK, USER_INFO } from '../../utils/constants';

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer">
      <p className="footer__caption">Учебный проект Яндекс.Практикум х BeatFilm.</p>
      <p className="footer__copyright">{`© ${currentYear}`}</p>
      <ul className="footer__list">
        <li className="footer__item">
          <a
            className="footer__link"
            target="_blank"
            rel="noreferrer"
            href={PRACTICUM_LINK}
          >
            Яндекс.Практикум
          </a>
        </li>
        <li className="footer__item">
          <a
            className="footer__link"
            target="_blank"
            rel="noreferrer"
            href={USER_INFO.githubLink}
          >
            Github
          </a>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
