import React from 'react';
import PopupWithForm from './PopupWithForm.js';
function CardPopup({ isOpen, onClose }) {
    return (
        <PopupWithForm title="Новое место" name="card" isOpen={isOpen} onClose={onClose}>
            <input className="form__field" type="text" id="new-place" name="place" placeholder="Название"
                minLength="2" maxLength="30" required />
            <span className="form__field-error" id="new-place-error"></span>
            <input className="form__field" type="url" id="new-photo" name="photo"
                placeholder="Ссылка на картинку" required />
            <span className="form__field-error" id="new-photo-error"></span>
        </PopupWithForm>
    );
}

export default CardPopup;