import React from 'react';
import avatar from '../images/profile/download.jpg';

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
          <button type="button" onClick={props.onAddPlace} className="profile__add-button"></button>
      </section>
      <section className="gallery"></section>
      
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

