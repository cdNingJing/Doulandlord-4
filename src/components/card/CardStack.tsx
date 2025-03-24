import React from 'react';
import { Card } from '../../utils/cardTypes';
import CardView from './CardView';
import '../../styles/card.css';

interface CardStackProps {
  cards: Card[];
  maxVisible?: number;
  style?: React.CSSProperties;
  className?: string;
}

const CardStack: React.FC<CardStackProps> = ({
  cards,
  maxVisible = 3,
  style,
  className = ''
}) => {
  if (!cards || cards.length === 0) {
    return null;
  }

  // 只显示最上面的几张牌
  const visibleCards = cards.slice(0, maxVisible);
  
  return (
    <div className={`card-stack ${className}`} style={style}>
      {visibleCards.map((card, index) => (
        <CardView
          key={card.id}
          card={card}
          style={{
            position: 'absolute',
            top: `${index * 2}px`,
            left: `${index * 2}px`,
            zIndex: index
          }}
        />
      ))}
      {cards.length > maxVisible && (
        <div className="card-count">
          +{cards.length - maxVisible}
        </div>
      )}
    </div>
  );
};

export default CardStack; 