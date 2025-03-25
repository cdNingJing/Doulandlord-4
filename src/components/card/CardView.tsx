import React from 'react';
import { Card } from '../../utils/cardTypes';
import { getCardClassName, getCardImagePath } from '../../utils/cardUtils';
import '../../styles/card.css';

interface CardViewProps {
  card: Card;
  onClick?: (card: Card) => void;
  style?: React.CSSProperties;
  className?: string;
  size?: 'small' | 'medium' | 'large';
}

const CardView: React.FC<CardViewProps> = ({ 
  card, 
  onClick, 
  style, 
  className = '',
  size = 'medium'
}) => {
  const imagePath = getCardImagePath(card);
  
  const handleClick = () => {
    if (onClick) {
      onClick(card);
    }
  };
  
  return (
    <div 
      className={`card-container ${card.isSelected ? 'selected' : ''} ${!card.isFaceUp ? 'face-down' : ''} ${className} size-${size}`} 
      onClick={handleClick} 
      style={style}
      data-suit={card.suit}
      data-rank={card.rank}
    >
      {card.isFaceUp ? (
        <img 
          src={imagePath} 
          alt={`${card.suit} ${card.rank}`}
          className="card-image"
          loading="lazy"
        />
      ) : (
        <div className="card-back">
          <div className="card-back-pattern"></div>
        </div>
      )}
    </div>
  );
};

export default CardView; 