import { React, useState } from 'react';
import './Profile.css';
import { Link } from 'react-router-dom';

function Profile() {
  const [name, setName] = useState('Виталий');
  const [email, setEmail] = useState('pochta@yandex.ru');
  const [isEditable, setIsEditable] = useState(false);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleEditProfile = () => {
    setIsEditable(true);
  };

  const handleSaveProfile = () => {
    setIsEditable(false);
  };
  return (
    <section className="profile">
      <h1 className="profile__title">Привет, Виталий!</h1>
      <form className="profile-form" action="#">
        <label className="profile-form__label" htmlFor="profile-name">
          <span className="profile-form__text">Имя</span>
          <input
            className="profile-form__input"
            type="text"
            id="profile-name"
            placeholder="Имя"
            value={name}
            onChange={handleNameChange}
            minLength="2"
            maxLength="30"
            readOnly={!isEditable}
            required
          />
        </label>
        <label className="profile-form__label" htmlFor="profile-email">
          <span className="profile-form__text">E-mail</span>
          <input
            className="profile-form__input"
            type="text"
            id="profile-email"
            value={email}
            placeholder="E-mail"
            onChange={handleEmailChange}
            minLength="2"
            maxLength="30"
            readOnly={!isEditable}
            required
          />
        </label>
      </form>
      <ul className="profile__list">
        {!isEditable ? (
          <>
            <li className="profile__list-item"><button className="profile__button profile__link_type_edit" type="button" onClick={handleEditProfile}>Редактировать</button></li>
            <li className="profile__list-item"><Link to="/" className="profile__link profile__link_type_logout">Выйти из аккаунта</Link></li>
          </>
        ) : (
          <li className="profile__list-item"><button className="profile__button profile__link_type_save" type="button" onClick={handleSaveProfile}>Сохранить</button></li>
        )}
      </ul>
    </section>
  );
}

export default Profile;
