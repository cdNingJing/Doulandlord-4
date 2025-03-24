import React from 'react';

interface GameControlsProps {
  onPlay?: () => void;
  onPass?: () => void;
  onReset?: () => void;
  canPlay: boolean;
  canPass: boolean;
  style?: React.CSSProperties;
  className?: string;
}

const GameControls: React.FC<GameControlsProps> = ({
  onPlay,
  onPass,
  onReset,
  canPlay = false,
  canPass = false,
  style,
  className = ''
}) => {
  return (
    <div className={`game-controls ${className}`} style={style}>
      <button
        className="btn btn-primary"
        onClick={onPlay}
        disabled={!canPlay}
      >
        出牌
      </button>
      <button
        className="btn btn-secondary"
        onClick={onPass}
        disabled={!canPass}
      >
        不出
      </button>
      <button
        className="btn btn-warning"
        onClick={onReset}
      >
        重置
      </button>
    </div>
  );
};

export default GameControls; 