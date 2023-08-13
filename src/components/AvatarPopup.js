import React from 'react';
import PopupWithForm from './PopupWithForm.js';
function AvatarPopup({ isOpen, onClose }) {
    return (
        <PopupWithForm title="Обновить аватар" name="avatar" isOpen={isOpen} onClose={onClose}>
            <input className="form__field" type="url" id="avatar" name="avatar"
                placeholder="Введите ссылку на аватар" minLength="2" maxLength="200" required />
            <span className="form__field-error" id="avatar-error"></span>
        </PopupWithForm>
    );
}

export default AvatarPopup;