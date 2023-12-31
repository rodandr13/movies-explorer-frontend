import React from 'react';
import './NotFound.css';
import { useNavigate } from 'react-router-dom';
import { PATHS } from '../../utils/constants';

function NotFound() {
  const navigate = useNavigate();

  return (
    <main>
      <section className="not-found">
        <h1 className="not-found__title">404</h1>
        <p className="not-found__caption">Страница не найдена</p>
        <button className="not-found__button" type="button" onClick={() => navigate(PATHS.MAIN)}>Назад</button>
      </section>
    </main>
  );
}

export default NotFound;
