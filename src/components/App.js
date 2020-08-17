import React from 'react';
import '../index.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';



function handleEditAvatarClick() {
  document.querySelector('#popup-avatar').classList.add('popup_state_opened');
  }
function handleEditProfileClick() {
  document.querySelector('#popup-author').classList.add('popup_state_opened');
}
function handleAddPlaceClick() {
  document.querySelector('#popup-place').classList.add('popup_state_opened');
} 

let isEditProfilePopupOpen = false;
let isAddPlacePopupOpen = false;
let isEditAvatarPopupOpen = false;


function App() {
  return (
<div className="page">
  <Header />
  <Main onEditAvatar={handleEditAvatarClick}  onEditProfile={handleEditProfileClick} onEditAvatar={handleAddPlaceClick} />
  <PopupWithForm name='popup_author_form' title='Редактировать профиль' />
  <PopupWithForm name='popup_place_form' title='Новое место' />
  <PopupWithForm name='popup_delete' title='Вы уверены?' />
  <PopupWithForm name='popup_avatar' title='Обновите аватар' />
  <Footer />
</div>      
  );

  // function handle() {
  //   const popupAuthor = document.querySelector('#popup-author');
  //   popupAuthor.classList.add('popup_state_opened')
  // }
  // const editButton = document.querySelector('.profile__info-edit-button');
  // editButton.addEventListener('click', console.log('hi!'));
  // const addButton = document.querySelector('.profile__add-button');
  // addButton.addEventListener('click', console.log('hi!'));

}

export default App;


