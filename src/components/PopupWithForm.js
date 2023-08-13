import React from 'react';

function PopupWithForm({ title, name, children, isOpen, onClose }) {
  return (
    <div className={`popup popup_type_${name} ${isOpen ? 'popup_opened' : ''}`}>
      <div className="popup__conteiner">
        <form className="form" name={`form-${name}`}>
          <h2 className="form__title">{title}</h2>
          <fieldset className="form__edit">
            {children}
          </fieldset>
          <button className="form__submit-button" type="submit">Сохранить</button>
        </form>
        <button className="popup__close-icon" type="button" aria-label="Закрыть" onClick={onClose} />
      </div>
    </div>
  );
}

export default PopupWithForm;