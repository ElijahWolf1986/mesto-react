import React from 'react';
import avatar from '../images/profile/download.jpg';

// function handleEditAvatarClick() {
// document.querySelector('#popup-avatar').classList.add('popup_state_opened');
// }

// function handleEditProfileClick() {
//     document.querySelector('#popup-author').classList.add('popup_state_opened');
// }

// function handleAddPlaceClick() {
//     document.querySelector('#popup-place').classList.add('popup_state_opened');
// }    


function Main(props) {
    return (
        <main className="content">
      <section className="profile">
          <div className="profile__wrapper">
                      <div className="profile__edit" onClick={props.onEditAvatar}>
                      <img src={avatar} alt="аватар" className="profile__avatar"/>
                      </div>
              <div className="profile__data-container">
                  <div className="profile__info">
                      <h1 className="profile__info-title">Жак-Ив Кусто</h1>
                      <button type="button" onClick={props.onEditProfile} className="profile__info-edit-button"></button>
                  </div>
                  <p className="profile__info-subtitle">Исследователь океана</p>
              </div>
          </div>
          <button type="button" onClick={props.onEditAvatar} className="profile__add-button"></button>
      </section>
      <section className="gallery"></section>
      
      {/* <section id='popup-author' className="popup">
          <div className="popup__overlay"> </div>
          <div className="popup__container">
              <button type="button" className="popup__close-icon"></button>
              <form name="popup_author_form" action="#" method="POST" className="popup__form" noValidate>
                  <h2 className="popup__title">Редактировать профиль</h2>
                  <fieldset className="popup__form-author-info">
                      <input id="author-input" type="text" name="author" minLength="2" maxLength="40" required placeholder="Введите имя" className="popup__input"/>
                      <span id="author-input-error" className="popup__error_visible"></span>
                      <input id="metier-input" type="text" name="metier" minLength="2" maxLength="200" required placeholder="Введите род занятий"  className="popup__input" />
                      <span id="metier-input-error" className="popup__error_visible"></span>
                  </fieldset> 
                  <button type="submit" value="" className="popup__button-save">Сохранить</button>                   
              </form>
          </div>
      </section>
      <section id='popup-place' className="popup">
          <div className="popup__overlay"> </div>
          <div className="popup__container">
              <button type="button" name='closePlace' className="popup__close-icon"></button>
              <form name="popup_place_form" action="#" method="POST" className="popup__form" noValidate>
                  <h2 className="popup__title">Новое место</h2>
                  <fieldset className="popup__form-author-info">
                      <input id="place-input" type="text" name="place" minLength="1" maxLength="30" required placeholder="Название" className="popup__input"/>
                      <span id="place-input-error" className="popup__error_visible"></span>
                      <input id="url-input" type="url" name="url" required placeholder="Ссылка на картинку"  className="popup__input" />
                      <span id="url-input-error" className="popup__error_visible"></span>
                  </fieldset> 
                  <button type="submit" value="" className="popup__button-save">Создать</button>                   
              </form>
          </div>
      </section> */}
      {/* <section id='popup-view' className="popup">
          <div className="popup__overlay"> </div>
          <div className="popup__container-view">
              <button type="button" name='closePlace' className="popup__close-icon"></button>
              <img src="#" alt="" className="popup__img-view"/>
              <h2 className="popup__title-view"></h2>               
          </div>
      </section> */}
      {/* <section id='popup-delete' className="popup">
        <div className="popup__overlay"> </div>
        <div className="popup__container">
          <button type="button" className="popup__close-icon"></button>
          <form name="popup_delete" action="#" method="POST" className="popup__form" noValidate>
            <h2 className="popup__title">Вы уверены?</h2>
            <button type="submit" value="" className="popup__button-save">Да</button>                   
          </form>
        </div>
      </section> */}
      {/* <section id='popup-avatar' className="popup">
        <div className="popup__overlay"> </div>
        <div className="popup__container">
          <button type="button" className="popup__close-icon"></button>
          <form name="popup_avatar" action="#" method="POST" className="popup__form" noValidate>
            <h2 className="popup__title">Обновите аватар</h2>
            <fieldset className="popup__form-author-info">
              <input id="url-input" type="url" name="url" required placeholder="Ссылка на аватар"  className="popup__input" />
              <span id="url-input-error" className="popup__error_visible"></span>
            </fieldset> 
            <button type="submit"  className="popup__button-save">Сохранить</button>                   
          </form>
        </div>
      </section> */}
      <template id="card">
        <div className="card">
          <button className="card__trash"></button>
          <img src="#" alt="" className="card__img"/>
          <div className="card__place">
            <h3 className="card__title"></h3>
            <div className="card__like_group">
              <button type="button" title="" className="card__like"></button>
              <p className="card__like_counter"></p>
            </div>
          </div>
        </div>
      </template>
      </main>
    );   
    
    
   
}

export default Main;

