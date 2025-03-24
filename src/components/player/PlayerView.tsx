import React from 'react';

interface PlayerViewProps {
  name: string;
  score: number;
  cardCount: number;
  isActive?: boolean;
  isLandlord?: boolean;
  isPartner?: boolean;
  style?: React.CSSProperties;
  className?: string;
}

const PlayerView: React.FC<PlayerViewProps> = ({
  name,
  score,
  cardCount,
  isActive = false,
  isLandlord = false,
  isPartner = false,
  style,
  className = ''
}) => {
  return (
    <div 
      className={`player-container ${isActive ? 'active' : ''} ${isLandlord ? 'landlord' : ''} ${isPartner ? 'partner' : ''} ${className}`} 
      style={style}
    >
      <div className="player-info">
        <div className="player-name">
          {name}
          {isLandlord && <span className="player-role">地主</span>}
          {isPartner && <span className="player-role">队友</span>}
        </div>
        <div className="player-score">{score}分</div>
      </div>
      <div className="player-cards-info">
        <span className="card-count">{cardCount}张牌</span>
      </div>
    </div>
  );
};

export default PlayerView; 