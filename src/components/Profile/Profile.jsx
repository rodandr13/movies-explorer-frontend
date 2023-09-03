import React from 'react';
import './Profile.css';

function Profile() {
  return (
    <section className="profile">
      <h1 className="profile__title">Привет, Виталий!</h1>
      <form className="profile-form" action="#">
        <label className="profile-form__label" htmlFor="profile-name">
          <span className="profile-form__text">Имя</span>
          <input className="profile-form__input" type="text" id="profile-name" value="Дима" />
        </label>
        <label className="profile-form__label" htmlFor="profile-email">
          <span className="profile-form__text">Почта</span>
          <input className="profile-form__input" type="text" id="profile-email" value="pochta@yandex.ru" />
        </label>
      </form>
      <ul className="profile__list">
        <li><button className="profile__button profile__button_type_edit" type="button">Редактировать</button></li>
        <li><button className="profile__button profile__button_type_logout" type="button">Выйти из аккаунта</button></li>
      </ul>
    </section>
  );
}

export default Profile;
