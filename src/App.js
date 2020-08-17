import React from 'react';
import logo from './logo.svg';
import './index.css';

function App() {
  return (
<>
        <header class="header">
            <img src="./images/header/logo.svg" alt="логотип_сайта" class="header__logo"/>
        </header>
        <main class="content">
            <section class="profile">
                <div class="profile__wrapper">
                            <div class="profile__edit">
                            <img src="./images/profile/download.jpg" alt="аватар" class="profile__avatar"/>
                            </div>
                    <div class="profile__data-container">
                        <div class="profile__info">
                            <h1 class="profile__info-title">Жак-Ив Кусто</h1>
                            <button type="button" class="profile__info-edit-button"></button>
                        </div>
                        <p class="profile__info-subtitle">Исследователь океана</p>
                    </div>
                </div>
                <button type="button" class="profile__add-button"></button>
            </section>
            <section class="gallery"></section>
            <section class="footer">
                <p class="footer__copyright">&copy; 2020 Mesto Russia</p>
            </section>
            <section id='popup-author' class="popup">
                <div class="popup__overlay"> </div>
                <div class="popup__container">
                    <button type="button" class="popup__close-icon"></button>
                    <form name="popup_author_form" action="#" method="POST" class="popup__form" novalidate>
                        <h2 class="popup__title">Редактировать профиль</h2>
                        <fieldset class="popup__form-author-info">
                            <input id="author-input" type="text" name="author" minlength="2" maxlength="40" required placeholder="Введите имя" value="" class="popup__input"/>
                            <span id="author-input-error" class="popup__error_visible"></span>
                            <input id="metier-input" type="text" name="metier" minlength="2" maxlength="200" required placeholder="Введите род занятий" value="" class="popup__input" />
                            <span id="metier-input-error" class="popup__error_visible"></span>
                        </fieldset> 
                        <button type="submit" value="" class="popup__button-save">Сохранить</button>                   
                    </form>
                </div>
            </section>
            <section id='popup-place' class="popup">
                <div class="popup__overlay"> </div>
                <div class="popup__container">
                    <button type="button" name='closePlace' class="popup__close-icon"></button>
                    <form name="popup_place_form" action="#" method="POST" class="popup__form" novalidate>
                        <h2 class="popup__title">Новое место</h2>
                        <fieldset class="popup__form-author-info">
                            <input id="place-input" type="text" name="place" minlength="1" maxlength="30" required placeholder="Название" value="" class="popup__input"/>
                            <span id="place-input-error" class="popup__error_visible"></span>
                            <input id="url-input" type="url" name="url" required placeholder="Ссылка на картинку" value="" class="popup__input" />
                            <span id="url-input-error" class="popup__error_visible"></span>
                        </fieldset> 
                        <button type="submit" value="" class="popup__button-save">Создать</button>                   
                    </form>
                </div>
            </section>
            <section id='popup-view' class="popup">
                <div class="popup__overlay"> </div>
                <div class="popup__container-view">
                    <button type="button" name='closePlace' class="popup__close-icon"></button>
                    <img src="#" alt="" class="popup__img-view"/>
                    <h2 class="popup__title-view"></h2>               
                </div>
            </section>
            <section id='popup-delete' class="popup">
              <div class="popup__overlay"> </div>
              <div class="popup__container">
                <button type="button" class="popup__close-icon"></button>
                <form name="popup_delete" action="#" method="POST" class="popup__form" novalidate>
                  <h2 class="popup__title">Вы уверены?</h2>
                  <button type="submit" value="" class="popup__button-save">Да</button>                   
                </form>
              </div>
            </section>
            <section id='popup-avatar' class="popup">
              <div class="popup__overlay"> </div>
              <div class="popup__container">
                <button type="button" class="popup__close-icon"></button>
                <form name="popup_avatar" action="#" method="POST" class="popup__form" novalidate>
                  <h2 class="popup__title">Обновите аватар</h2>
                  <fieldset class="popup__form-author-info">
                    <input id="url-input" type="url" name="url" required placeholder="Ссылка на аватар" value="" class="popup__input" />
                    <span id="url-input-error" class="popup__error_visible"></span>
                  </fieldset> 
                  <button type="submit" value="" class="popup__button-save">Сохранить</button>                   
               </form>
              </div>
            </section>
            <template id="card">
              <div class="card">
                <button class="card__trash"></button>
                <img src="#" alt="" class="card__img"/>
                <div class="card__place">
                  <h3 class="card__title"></h3>
                  <div class="card__like_group">
                    <button type="button" title="" class="card__like"></button>
                    <p class="card__like_counter"></p>
                  </div>
                </div>
              </div>
            </template>
            </main>
</>
  );
}

export default App;
