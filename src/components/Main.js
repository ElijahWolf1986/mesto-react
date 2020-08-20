import React from 'react';
import avatar from '../images/profile/download.jpg';
import myApi from '../utils/Api';
import Card from './Card';

function Main(props) {
    const [userName, setUserName] = React.useState('Жак-Ив Кусто');
    const [userDescription, setUserDescription] = React.useState('Исследователь океана');
    const [userAvatar, setUserAvatar] = React.useState(avatar);
    const [cards, setCards] = React.useState([]);

    React.useEffect(() => {
        myApi.getUserInfo()
            .then((res) => {
                setUserName(res.name);
                setUserDescription(res.about);
                setUserAvatar(res.avatar);
            })
            .catch((err) => {
                console.log(`Ошибка получения данных о пользователе... ${err}`);
            })
    }, []);

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
                        <img src={userAvatar} alt="аватар" className="profile__avatar" />
                    </div>
                    <div className="profile__data-container">
                        <div className="profile__info">
                            <h1 className="profile__info-title">{userName}</h1>
                            <button type="button" onClick={props.onEditProfile} className="profile__info-edit-button"></button>
                        </div>
                        <p className="profile__info-subtitle">{userDescription}</p>
                    </div>
                </div>
                <button type="button" onClick={props.onAddPlace} className="profile__add-button"></button>
            </section>
            <section className="gallery">
                {cards.map((item, id) => {
                    return (
                        <Card card={item} key={id} onCardClick={props.selectedCard} />
                    )
                })}
            </section>
        </main>
    );
}

export default Main;

