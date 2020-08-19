import React from 'react';

function Card(props) {
    const card = props.card;
    function handleClick() {
        props.onCardClick(card);
    }

    return (
        <div className="card" onClick={handleClick} key={props.id}>
            <button className="card__trash"></button>
            <img src={card.link} alt="" className="card__img" />
            <div className="card__place">
                <h3 className="card__title">{card.name}</h3>
                <div className="card__like_group">
                    <button type="button" title="" className="card__like"></button>
                    <p className="card__like_counter">{card.likes.length}</p>
                </div>
            </div>
        </div>
    )
}

export default Card;