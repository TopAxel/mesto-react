import React from 'react';
import PopupWithForm from './PopupWithForm.js';
function DeleteCardPopup() {
    return (
        <PopupWithForm title="Вы уверены?" name="cards">
            <button className="form__submit-button form__submit-button_hover" type="submit">Да</button>
        </PopupWithForm>
    );
}

export default DeleteCardPopup;