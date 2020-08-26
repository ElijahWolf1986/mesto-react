import React from 'react';
import myApi from '../utils/api';
import Card from './Card';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function Main(props) {
    const currentUser = React.useContext(CurrentUserContext);
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

    return (
        <main className="content">
            <section className="profile">
                <div className="profile__wrapper">
                    <div className="profile__edit" onClick={props.onEditAvatar}>
                        <img src={currentUser.avatar} alt="аватар" className="profile__avatar" />
                    </div>
                    <div className="profile__data-container">
                        <div className="profile__info">
                            <h1 className="profile__info-title">{currentUser.name}</h1>
                            <button type="button" onClick={props.onEditProfile} className="profile__info-edit-button"></button>
                        </div>
                        <p className="profile__info-subtitle">{currentUser.about}</p>
                    </div>
                </div>
                <button type="button" onClick={props.onAddPlace} className="profile__add-button"></button>
            </section>
            <section className="gallery">
                {cards.map((item, id) => {
                    return (
                        <Card card={item} key={id} onCardClick={props.selectedCard} onCardLike={handleCardLike} onCardDelete={handleCardDelete} />
                    )
                })}
            </section>
        </main>
    );
}

export default Main;

