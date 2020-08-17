import React from 'react';

function PopupWithForm(props) {
    return (
    <section /* id='popup-author' */ className="popup popup_type_${props.name}">
        <div className="popup__overlay"> </div>
        <div className="popup__container">
            <button type="button" className="popup__close-icon"></button>
            <form name="popup_${props.name}" action="#" method="POST" className="popup__form" noValidate>
                <h2 className="popup__title">${props.title}</h2>
                <fieldset className="popup__form-author-info">
                    <input id="author-input" type="text" name="author" minLength="2" maxLength="40" required placeholder='${children}' className="popup__input"/>
                    <span id="author-input-error" className="popup__error_visible"></span>
                    <input id="metier-input" type="text" name="metier" minLength="2" maxLength="200" required placeholder='${children}'  className="popup__input" />
                    <span id="metier-input-error" className="popup__error_visible"></span>
                </fieldset> 
                <button type="submit" value="" className="popup__button-save">${children}</button>                   
            </form>
        </div>
    </section>    
    );
}

export default PopupWithForm;