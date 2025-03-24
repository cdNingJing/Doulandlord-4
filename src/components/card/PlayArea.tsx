import React from 'react';
import { Card, CardType } from '../../utils/cardTypes';
import CardView from './CardView';

interface PlayAreaProps {
  cards: Card[];
  playerName: string;
  cardType?: CardType;
  style?: React.CSSProperties;
}

const PlayArea: React.FC<PlayAreaProps> = ({
  cards,
  playerName,
  cardType,
  style
}) => {
  if (!cards || cards.length === 0) {
    return (
      <div className="play-area-container empty" style={style}>
        <div className="play-area-placeholder">等待出牌</div>
      </div>
    );
  }

  return (
    <div className="play-area-container" style={style}>
      <div className="play-area-header">
        <span className="player-name">{playerName}</span>
        {cardType && <span className="card-type">{cardType}</span>}
      </div>
      <div className="play-area-cards">
        {cards.map((card, index) => (
          <CardView
            key={card.id}
            card={card}
            className="card-played"
            style={{
              position: 'relative',
              zIndex: index,
              margin: '0 -15px',
              transform: `rotate(${(index - cards.length / 2 + 0.5) * 5}deg)`,
              transformOrigin: 'center 120%',
              animationDelay: `${index * 0.05}s`
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default PlayArea; 