import React from 'react';
import PopupWithForm from './PopupWithForm.js';
function ProfilePopup({ isOpen, onClose }) {
  return (
    <PopupWithForm title="Редактировать профиль" name="profile" isOpen={isOpen} onClose={onClose}>
      <input className="form__field" type="text" id="name" name="username" placeholder="Имя" minLength="2" maxLength="40" required />
      <span className="form__field-error" id="name-error"></span>
      <input className="form__field" type="text" id="job" name="job" placeholder="Профессия" minLength="2" maxLength="200" required />
      <span className="form__field-error" id="job-error"></span>
    </PopupWithForm>
  );
}

export default ProfilePopup;