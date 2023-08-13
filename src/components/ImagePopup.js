import React from 'react';
function ImagePopup({ card, onClose }) {
    return (
      <div className={`popup popup_type_image ${card ? 'popup_opened' : ''}`}>
        <div className="popup__conteiner-image">
          <figure className="opened-image">
            <img className="opened-image__image" src={card ? card.link : ''} alt={card ? card.name : ''} />
            <figcaption className="opened-image__signature">{card ? card.name : ''}</figcaption>
          </figure>
          <button className="popup__close-icon" type="button" aria-label="Закрыть" onClick={onClose} />
        </div>
      </div>
    );
  }

export default ImagePopup;