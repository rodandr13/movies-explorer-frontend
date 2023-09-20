import React from 'react';
import './Portfolio.css';
import { PORTFOLIO_LINKS } from '../../utils/constants';

function Portfolio() {
  return (
    <section className="portfolio">
      <h2 className="portfolio__title">Портфолио</h2>
      <ul className="portfolio__list">
        {PORTFOLIO_LINKS.map((link) => (
          <li key={link.url} className="portfolio__item">
            <a
              className="portfolio__link"
              target="_blank"
              rel="noreferrer"
              href={link.url}
            >
              {link.title}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Portfolio;
