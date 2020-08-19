import React from 'react';
import '../index.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';

function App() {

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);


  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditProfilePopupOpen(false); 
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
  
  return (
<div className="page">
  <Header />
  <Main onEditAvatar={handleEditAvatarClick}  onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} />

  <PopupWithForm id='popup-author' name='popup_author_form' title='Редактировать профиль' isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} >
    <fieldset className="popup__form-author-info">
      <input id="author-input" type="text" name="author" minLength="2" maxLength="40" required placeholder="Введите имя" className="popup__input"/>
      <span id="author-input-error" className="popup__error_visible"></span>
      <input id="metier-input" type="text" name="metier" minLength="2" maxLength="200" required placeholder="Введите род занятий"  className="popup__input" />
      <span id="metier-input-error" className="popup__error_visible"></span>
    </fieldset> 
    <button type="submit" className="popup__button-save">Сохранить</button>                   
  </PopupWithForm> 

  <PopupWithForm id='popup-place' name='popup_place_form' title='Новое место' isOpen={isAddPlacePopupOpen} onClose={closeAllPopups}>
  <fieldset className="popup__form-author-info">
    <input id="place-input" type="text" name="place" minLength="1" maxLength="30" required placeholder="Название" className="popup__input"/>
    <span id="place-input-error" className="popup__error_visible"></span>
    <input id="url-input" type="url" name="url" required placeholder="Ссылка на картинку" className="popup__input" />
    <span id="url-input-error" className="popup__error_visible"></span>
  </fieldset> 
  <button type="submit" className="popup__button-save">Создать</button>  
  </PopupWithForm>  

  {/* <PopupWithForm id='popup-delete' name='popup_delete' title='Вы уверены?'>
    <button type="submit"  className="popup__button-save">Да</button>                   
  </PopupWithForm> */}

  <PopupWithForm id='popup-avatar' name='popup_avatar' title='Обновите аватар' isOpen={isEditAvatarPopupOpen}  onClose={closeAllPopups}>

  <fieldset className="popup__form-author-info">
    <input id="url-input" type="url" name="url" required placeholder="Ссылка на аватар" className="popup__input"/>
    <span id="url-input-error" className="popup__error_visible"></span>
  </fieldset> 
  <button type="submit"  className="popup__button-save">Сохранить</button>    

  </PopupWithForm>
  
  <Footer />
</div>      
  );

}

export default App;




