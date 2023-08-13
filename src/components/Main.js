import React from 'react';
import api from '../utils/Api';
import Card from './Card';
function Main({ onEditAvatar, onEditProfile, onAddPlace, onCardClick }) {
  const [userName, setUserName] = React.useState('');
  const [userDescription, setUserDescription] = React.useState('');
  const [userAvatar, setUserAvatar] = React.useState('');
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    api.getUserInfo()
      .then(data => {
        setUserName(data.name);
        setUserDescription(data.about);
        setUserAvatar(data.avatar);
      })
      .catch(error => {
        console.log(error);
      });

    api.getInitialCards()
      .then(data => {
        setCards(data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <main className="content">
      <section className="profile">
        <img className="profile__avatar" src={userAvatar} alt="фото профиля" />
        <button className="profile__avatar-button" type="button" aria-label="редактировать аватар" onClick={onEditAvatar}></button>
        <div className="profile__info">
          <h1 className="profile__title">{userName}</h1>
          <button className="profile__edit-button" type="button" aria-label="редактировать профиль" onClick={onEditProfile}></button>
          <p className="profile__subtitle">{userDescription}</p>
        </div>
        <button className="profile__add-button" type="button" aria-label="добавить карточку" onClick={onAddPlace}></button>
      </section>

      <section className="elements">
        <ul className="element">
          {cards.map((card) => (
            <Card key={card._id} card={card} onCardClick={onCardClick}/>
          ))}
        </ul>
      </section>
    </main>
  );
}

export default Main;