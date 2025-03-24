import React from 'react';
import { Card } from '../../utils/cardTypes';
import CardView from './CardView';

interface HandViewProps {
  cards: Card[];
  onCardSelect?: (card: Card) => void;
  isActive?: boolean;
  style?: React.CSSProperties;
  className?: string;
}

const HandView: React.FC<HandViewProps> = ({
  cards,
  onCardSelect,
  isActive = false,
  style,
  className = ''
}) => {
  if (!cards || cards.length === 0) {
    return (
      <div className={`hand-container ${className}`} style={style}>
        <div className="empty-hand">无牌</div>
      </div>
    );
  }

  const handleCardClick = (card: Card) => {
    if (onCardSelect && isActive) {
      onCardSelect(card);
    }
  };

  // 根据牌的数量计算每张牌的间距，以确保所有牌都能在容器中显示
  const calculateMargin = (count: number) => {
    if (count <= 3) return { marginRight: '-10px' };
    if (count <= 6) return { marginRight: '-15px' };
    if (count <= 10) return { marginRight: '-30px' };
    return { marginRight: '-40px' };
  };

  const margin = calculateMargin(cards.length);

  return (
    <div className={`hand-container ${isActive ? 'active' : ''} ${className}`} style={style}>
      {cards.map((card, index) => (
        <CardView
          key={card.id}
          card={card}
          onClick={handleCardClick}
          style={{
            ...margin,
            zIndex: index,
          }}
        />
      ))}
    </div>
  );
};

export default HandView; 