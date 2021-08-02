import React from 'react';
import GameModal from '../gameModal/GameModal';
import './gameCard.css';

function GameCard({name, thumbnailSrc, description, modal}) {
    return (
        <div className="GameCard">
            <div className="GameThumbnail">
                <img src={thumbnailSrc} alt={name} />
            </div>
            <h3 className="GameName">{name}</h3>
            <div className="GameDescriptionContainer">
                <p className="GameDescription">{description}</p>
            </div>
            <GameModal 
            className="button-modal"
              title={name}
            />
        </div>
    )
}

export default GameCard
