import React from 'react';

function PopupWithForm(props) {
    // console.log(props.isOpen);
    return (
    <section  id={props.id} className={props.isOpen ? 'popup popup_state_opened' : 'popup'}>
        <div className="popup__overlay" onClick={props.onClose}> </div>
        <div className="popup__container">
            <button type="button" className="popup__close-icon" onClick={props.onClose}></button>
            <form name="popup_${props.name}" action="#" method="POST" className="popup__form" noValidate>
                <h2 className="popup__title">{props.title}</h2>
                {props.children}
            </form>
        </div>
    </section>    
    );
}

export default PopupWithForm;