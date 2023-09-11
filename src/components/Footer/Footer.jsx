import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <p className="footer__caption">Учебный проект Яндекс.Практикум х BeatFilm.</p>
      <p className="footer__copyright">© 2020</p>
      <ul className="footer__list">
        <li className="footer__item">
          <a
            className="footer__link"
            target="_blank"
            rel="noreferrer"
            href="https://practicum.yandex.ru/"
          >
            Яндекс.Практикум
          </a>
        </li>
        <li className="footer__item">
          <a
            className="footer__link"
            target="_blank"
            rel="noreferrer"
            href="https://github.com/rodandr13"
          >
            Github
          </a>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
