import React from 'react';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import ProfilePopup from './ProfilePopup.js';
import CardPopup from './CardPopup.js';
import AvatarPopup from './AvatarPopup.js';
import DeleteCardPopup from './DeleteCardPopup.js';
import ImagePopup from './ImagePopup.js';


function App() {
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState(null);

  const handleEditAvatarClick = () => {
    setEditAvatarPopupOpen(true);
  };

  const handleEditProfileClick = () => {
    setEditProfilePopupOpen(true);
  };

  const handleAddPlaceClick = () => {
    setAddPlacePopupOpen(true);
  };

  const handleCardClick = (card) => {
    setSelectedCard(card);
  };

  function closeAllPopups() {
    setEditAvatarPopupOpen(false);
    setEditProfilePopupOpen(false);
    setAddPlacePopupOpen(false);
    setSelectedCard(null);
  }

  return (
    <div className="page">
      <div className="page__container">
        <Header />
        <Main onEditAvatar={handleEditAvatarClick}
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onCardClick={handleCardClick} />
        <Footer />
        <ProfilePopup
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups} />
        <CardPopup
          isOpen={isAddPlacePopupOpen} 
          onClose={closeAllPopups}/>
        <AvatarPopup
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups} />
        <DeleteCardPopup />
        <ImagePopup 
        card={selectedCard}
        onClose={closeAllPopups}/>
      </div>
    </div>
  );
}

export default App;
