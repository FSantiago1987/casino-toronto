import React from 'react';
import './gameCard.css';

function GameCard({name, thumbnailSrc, description, modal}) {
    return (
        <div className="GameCard">
            <div className="ServiceThumbnail">
                <img src={thumbnailSrc} alt={name} />
            </div>
            <h3 className="ServiceName">{name}</h3>
            <div className="ServiceDescriptionContainer">
                <p className="ServiceDescription">{description}</p>
            </div>
        </div>
    )
}

export default GameCard
