import React from 'react';

function Card({ card, onCardClick }) {
  function handleClick() {
    onCardClick(card);
  };

  return (
    <li className="element__card">
      <button className="element__delete-icon" type="button" aria-label="удалить"></button>
      <img className="element__photo" src={card.link} alt={card.name} onClick={handleClick} />
      <h2 className="element__title">{card.name}</h2>
      <ul className="element__like-box">
        <button className="element__like-icon" type="button" aria-label="нравится"></button>
        <span className="element__like-counter">{card.likes.length}</span>
      </ul>
    </li>
  );
}

export default Card;