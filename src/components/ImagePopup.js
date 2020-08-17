import React from 'react';

function ImagePopup() {
    return (
        <section id='popup-view' className="popup">
          <div className="popup__overlay"> </div>
          <div className="popup__container-view">
              <button type="button" name='closePlace' className="popup__close-icon"></button>
              <img src="#" alt="" className="popup__img-view"/>
              <h2 className="popup__title-view"></h2>               
          </div>
      </section>
    );
}

export default ImagePopup;