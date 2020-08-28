import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import ImagePopup from './ImagePopup';
import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup';
import AddPlacePopup from './AddPlacePopup';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import myApi from '../utils/Api';


function App() {

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState();
  const [currentUser, setCurrentUser] = React.useState({});
  const [cards, setCards] = React.useState([]);

  function handleCardLike(card) {
    const isLiked = card.likes.some(i => i._id === currentUser._id);
    if (!isLiked) {
      myApi.setLike(card._id)
        .then((newCard) => {
          const newCards = cards.map((c) => c._id === card._id ? newCard : c);
          setCards(newCards);
        })
        .catch((err) => {
          console.log(`Ошибка отправки лайка... ${err}`);
        })
    } else {
      myApi.delLike(card._id)
        .then((newCard) => {
          const newCards = cards.map((c) => c._id === card._id ? newCard : c);
          setCards(newCards);
        })
        .catch((err) => {
          console.log(`Ошибка отправки лайка... ${err}`);
        })
    }
  }

  function handleCardDelete(card) {
    myApi.deleteCard(card._id)
      .then(() => {
        const newCards = cards.filter(c => c._id !== card._id);
        setCards(newCards);
      })
  }

  React.useEffect(() => {
    myApi.getInitialCards()
      .then((res) => {
        setCards(res);
      })
      .catch((err) => {
        console.log(`Ошибка получения данных... ${err}`);
      })
  }, []);

  React.useEffect(() => {
    myApi.getUserInfo()
      .then((res) => {
        setCurrentUser(res);
      })
      .catch((err) => {
        console.log(`Ошибка получения данных о пользователе... ${err}`);
      })
  }, []);

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setSelectedCard(undefined);
  }

  function handleCardClick(selectedCard) {
    setSelectedCard(selectedCard);
  }

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }
  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }
  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleUpdateUser(onUpdateUser) {
    myApi.setUserInfo(onUpdateUser)
      .then((res) => {
        setCurrentUser(res);
        closeAllPopups();
      })
  }

  function handleUpdateAvatar(onUpdateAvatar) {
    myApi.setAvatar(onUpdateAvatar)
      .then((res) => {
        setCurrentUser(res);
        closeAllPopups();
      })
  }

  function handleAddPlaceSubmit(onAddPlace) {
    myApi.setNewCard(onAddPlace)
      .then((newCard) => {
        setCards([...cards, newCard]);
        closeAllPopups();
      })
  }

  return (
    <div className="page">
      <CurrentUserContext.Provider value={currentUser}>
        <Header />

        <Main onEditAvatar={handleEditAvatarClick} onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} selectedCard={handleCardClick} cards={cards} onCardLike={handleCardLike} onCardDelete={handleCardDelete} />

        <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} onUpdateUser={handleUpdateUser} />

        <AddPlacePopup isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} onAddPlace={handleAddPlaceSubmit} />

        <EditAvatarPopup isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} onUpdateAvatar={handleUpdateAvatar} />

        <ImagePopup card={selectedCard} onClose={closeAllPopups} />

        <Footer />
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;




