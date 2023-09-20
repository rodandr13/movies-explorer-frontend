import {
  React, useContext, useEffect, useState,
} from 'react';
import './Profile.css';
import useFormValidation from '../../hooks/useFormValidation';
import CurrentUserContext from '../../context/CurrentUserContext';

function Profile({ handleLogout, handleEditUser, editProfileError }) {
  const { name, email } = useContext(CurrentUserContext);
  const [isUpdatedSuccessfull, setIsUpdatedSuccessfull] = useState(false);

  const {
    values, handleChange, errors, isValid, setValues,
  } = useFormValidation({ name, email }, true);

  const [isEditable, setIsEditable] = useState(false);

  const handleEditProfile = (e) => {
    e.preventDefault();
    setIsEditable(true);
    setIsUpdatedSuccessfull(false);
  };

  const handleSaveProfile = (e) => {
    e.preventDefault();
    handleEditUser(values)
      .then(() => {
        setIsEditable(false);
        setIsUpdatedSuccessfull(true);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    setValues({ name, email });
  }, []);
  return (
    <main className="profile">
      <h1 className="profile__title">{`Привет, ${name}!`}</h1>
      <form className="profile-form" onSubmit={handleSaveProfile}>
        <div className="profile__container">
          <label className="profile-form__label" htmlFor="profile-name">
            <span className="profile-form__text">Имя</span>
            <input
              className="profile-form__input"
              type="text"
              id="profile-name"
              placeholder="Имя"
              name="name"
              value={values.name || ''}
              onChange={handleChange}
              minLength="2"
              maxLength="30"
              disabled={!isEditable}
              required
            />
            {errors.name && <span className="profile-form__error">{errors.name}</span>}
          </label>
          <label className="profile-form__label" htmlFor="profile-email">
            <span className="profile-form__text">E-mail</span>
            <input
              className="profile-form__input"
              type="email"
              id="profile-email"
              name="email"
              value={values.email || ''}
              placeholder="E-mail"
              onChange={handleChange}
              minLength="2"
              maxLength="30"
              disabled={!isEditable}
              required
            />
            {isUpdatedSuccessfull && <p className="profile-form__success-message">Информация изменена успешно</p>}
            {errors.email && <span className="profile-form__error">{errors.email}</span>}
          </label>
        </div>
        {editProfileError && (
        <p className={`profile__error ${isEditable ? 'profile__error_active' : ''}`}>
          {editProfileError}
        </p>
        )}
        <ul className="profile__list">
          {!isEditable ? (
            <>
              <li className="profile__list-item">
                <button
                  className="profile__button profile__link_type_edit"
                  type="button"
                  onClick={handleEditProfile}
                >
                  Редактировать
                </button>
              </li>
              <li className="profile__list-item">
                <button
                  type="button"
                  onClick={handleLogout}
                  className="profile__link profile__link_type_logout"
                >
                  Выйти из аккаунта
                </button>
              </li>
            </>
          ) : (
            <li className="profile__list-item">
              <button
                className="profile__button profile__link_type_save"
                type="submit"
                disabled={!isValid}
              >
                Сохранить
              </button>
            </li>
          )}
        </ul>
      </form>
    </main>
  );
}

export default Profile;
