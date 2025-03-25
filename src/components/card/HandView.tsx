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

  // 根据卡片数量确定类名
  const getCardsCountClass = (count: number) => {
    if (count <= 5) return 'cards-few';
    if (count <= 10) return 'cards-medium';
    if (count <= 15) return 'cards-many';
    return 'cards-lots';
  };

  // 根据卡片数量计算每张卡片的样式
  const getCardStyle = (index: number, total: number) => {
    // 基础样式
    const baseStyle: React.CSSProperties = {
      zIndex: index,
    };

    // 根据卡片数量动态计算重叠程度
    if (total <= 5) {
      baseStyle.marginRight = '-10px';
    } else if (total <= 10) {
      baseStyle.marginRight = '-25px';
    } else if (total <= 15) {
      baseStyle.marginRight = '-40px';
    } else {
      baseStyle.marginRight = '-50px';
    }

    // 对于大于13张的情况，进一步缩小
    if (total > 13) {
      baseStyle.transform = 'scale(0.9)';
    }

    return baseStyle;
  };

  return (
    <div 
      className={`hand-container ${isActive ? 'active' : ''} ${getCardsCountClass(cards.length)} ${className}`}
      style={style}
    >
      {cards.map((card, index) => (
        <CardView
          key={card.id}
          card={card}
          onClick={() => handleCardClick(card)}
          style={getCardStyle(index, cards.length)}
          className="card-view"
        />
      ))}
    </div>
  );
};

export default HandView; 