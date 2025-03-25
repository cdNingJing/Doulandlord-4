import React, { useState, useEffect } from 'react';
import { Card, CardSuit, CardRank, CardType } from '../utils/cardTypes';
import { createDeck, dealCards, sortCards } from '../utils/cardUtils';
import PlayerView from '../components/player/PlayerView';
import HandView from '../components/card/HandView';
import PlayArea from '../components/card/PlayArea';
import GameControls from '../components/controls/GameControls';
import '../styles/gameLayout.css';

// 游戏角色类型
type PlayerRole = 'farmer' | 'landlord' | 'none';

// 玩家信息接口
interface PlayerInfo {
  name: string;
  score: number;
  role: PlayerRole;
  isActive: boolean;
}

// 将游戏角色映射到组件需要的属性
const mapRoleToProps = (role: PlayerRole): { isLandlord: boolean, isPartner: boolean } => {
  switch (role) {
    case 'landlord':
      return { isLandlord: true, isPartner: false };
    case 'farmer':
      return { isLandlord: false, isPartner: true };
    default:
      return { isLandlord: false, isPartner: false };
  }
};

// 简单游戏界面组件
const GamePage: React.FC = () => {
  const [deck, setDeck] = useState<Card[]>([]);
  const [playerHands, setPlayerHands] = useState<Card[][]>([]);
  const [remainingCards, setRemainingCards] = useState<Card[]>([]);
  const [selectedCards, setSelectedCards] = useState<Card[]>([]);
  const [lastPlayedCards, setLastPlayedCards] = useState<Card[]>([]);
  const [currentPlayerIndex, setCurrentPlayerIndex] = useState(0);
  const [players, setPlayers] = useState<PlayerInfo[]>([
    { name: '玩家', score: 100, role: 'landlord', isActive: true },
    { name: '电脑1', score: 100, role: 'farmer', isActive: false },
    { name: '电脑2', score: 100, role: 'farmer', isActive: false },
    { name: '电脑3', score: 100, role: 'farmer', isActive: false }
  ]);
  
  // 根据屏幕尺寸确定卡片大小
  const [cardSize, setCardSize] = useState<'small' | 'medium' | 'large'>('medium');
  
  // 监听窗口大小变化，调整卡片大小
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 600) {
        setCardSize('small');
      } else if (width < 900) {
        setCardSize('medium');
      } else {
        setCardSize('large');
      }
    };
    
    // 初始执行一次
    handleResize();
    
    // 监听窗口大小变化
    window.addEventListener('resize', handleResize);
    
    // 清理监听器
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  // 初始化游戏
  useEffect(() => {
    startNewGame();
  }, []);
  
  // 开始新游戏
  const startNewGame = () => {
    const newDeck = createDeck();
    setDeck(newDeck);
    
    const dealtCards = dealCards(newDeck);
    setPlayerHands(dealtCards.slice(0, 4));
    setRemainingCards(dealtCards[4]);
    
    setSelectedCards([]);
    setLastPlayedCards([]);
    setCurrentPlayerIndex(0);
    
    // 重置玩家状态
    setPlayers(prevPlayers => 
      prevPlayers.map((player, index) => ({
        ...player,
        isActive: index === 0
      }))
    );
  };
  
  // 处理卡片选择
  const handleCardSelect = (card: Card) => {
    setSelectedCards(prev => {
      const isSelected = prev.some(c => 
        c.suit === card.suit && c.rank === card.rank
      );
      
      if (isSelected) {
        return prev.filter(c => 
          !(c.suit === card.suit && c.rank === card.rank)
        );
      } else {
        return [...prev, card];
      }
    });
  };
  
  // 出牌
  const handlePlayCards = () => {
    if (selectedCards.length === 0) return;
    
    // 更新出牌区域
    setLastPlayedCards([...selectedCards]);
    
    // 从玩家手牌中移除已出的牌
    setPlayerHands(prev => {
      const newHands = [...prev];
      const playerHand = [...newHands[currentPlayerIndex]];
      
      selectedCards.forEach(card => {
        const index = playerHand.findIndex(c => 
          c.suit === card.suit && c.rank === card.rank
        );
        
        if (index !== -1) {
          playerHand.splice(index, 1);
        }
      });
      
      newHands[currentPlayerIndex] = playerHand;
      return newHands;
    });
    
    // 清空选中的牌
    setSelectedCards([]);
    
    // 下一位玩家
    const nextPlayer = (currentPlayerIndex + 1) % 4;
    setCurrentPlayerIndex(nextPlayer);
    
    // 更新玩家状态
    setPlayers(prevPlayers => 
      prevPlayers.map((player, index) => ({
        ...player,
        isActive: index === nextPlayer
      }))
    );
    
    // 如果是AI玩家，模拟AI出牌
    if (nextPlayer !== 0) {
      setTimeout(() => simulateAIPlay(nextPlayer), 1000);
    }
  };
  
  // 不出牌
  const handlePass = () => {
    // 下一位玩家
    const nextPlayer = (currentPlayerIndex + 1) % 4;
    setCurrentPlayerIndex(nextPlayer);
    
    // 更新玩家状态
    setPlayers(prevPlayers => 
      prevPlayers.map((player, index) => ({
        ...player,
        isActive: index === nextPlayer
      }))
    );
    
    // 如果是AI玩家，模拟AI出牌
    if (nextPlayer !== 0) {
      setTimeout(() => simulateAIPlay(nextPlayer), 1000);
    }
  };
  
  // 模拟AI出牌
  const simulateAIPlay = (aiIndex: number) => {
    const aiHand = playerHands[aiIndex];
    if (aiHand.length === 0) return;
    
    // 简单AI: 随机出一张牌
    const randomIndex = Math.floor(Math.random() * aiHand.length);
    const cardToPlay = aiHand[randomIndex];
    
    // 更新出牌区域
    setLastPlayedCards([cardToPlay]);
    
    // 从AI手牌中移除已出的牌
    setPlayerHands(prev => {
      const newHands = [...prev];
      const aiHandUpdated = [...newHands[aiIndex]];
      aiHandUpdated.splice(randomIndex, 1);
      newHands[aiIndex] = aiHandUpdated;
      return newHands;
    });
    
    // 下一位玩家
    const nextPlayer = (aiIndex + 1) % 4;
    setCurrentPlayerIndex(nextPlayer);
    
    // 更新玩家状态
    setPlayers(prevPlayers => 
      prevPlayers.map((player, index) => ({
        ...player,
        isActive: index === nextPlayer
      }))
    );
    
    // 如果下一位仍是AI，继续模拟
    if (nextPlayer !== 0) {
      setTimeout(() => simulateAIPlay(nextPlayer), 1000);
    }
  };
  
  // 渲染玩家手牌，根据玩家类型和手牌数量调整显示
  const renderPlayerHand = (playerIndex: number) => {
    const cards = playerHands[playerIndex];
    if (!cards || cards.length === 0) {
      return <div className="hand-placeholder">无牌</div>;
    }
    
    // 玩家（人类）手牌
    if (playerIndex === 0) {
      return (
        <HandView 
          cards={cards}
          onCardSelect={handleCardSelect}
          isActive={players[0].isActive}
          className="player-hand"
        />
      );
    }
    
    // AI玩家手牌（使用合适的尺寸）
    return (
      <div className="ai-hand-container">
        {[...Array(cards.length)].map((_, index) => (
          <div 
            key={index} 
            className="card-back-mini"
            style={{ marginLeft: index > 0 ? '-10px' : '0' }}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="game-page">
      <header className="game-header">
        <h1>四人斗地主</h1>
        <div className="game-score">
          总分: {players[0].score}
        </div>
      </header>
      
      <main className="game-main">
        {/* 上方对手 */}
        <div className="opponent-area top">
          <PlayerView 
            name={players[2].name}
            score={players[2].score}
            cardCount={playerHands[2]?.length || 0}
            isActive={players[2].isActive}
            isLandlord={players[2].role === 'landlord'}
            isPartner={players[2].role === 'farmer'}
            className="position-top"
          />
          <div className="opponent-hand-area">
            {renderPlayerHand(2)}
          </div>
        </div>
        
        <div className="game-middle">
          {/* 左侧对手 */}
          <div className="opponent-area left">
            <PlayerView 
              name={players[1].name}
              score={players[1].score}
              cardCount={playerHands[1]?.length || 0}
              isActive={players[1].isActive}
              isLandlord={players[1].role === 'landlord'}
              isPartner={players[1].role === 'farmer'}
              className="position-left"
            />
            <div className="opponent-hand-area">
              {renderPlayerHand(1)}
            </div>
          </div>
          
          {/* 出牌区域 */}
          <div className="play-area">
            <PlayArea 
              cards={lastPlayedCards}
              playerName={players[currentPlayerIndex === 0 ? 3 : currentPlayerIndex - 1].name}
              cardType={lastPlayedCards.length > 0 ? CardType.SINGLE : undefined}
            />
            
            {/* 底牌区域 */}
            <div className="deck-area">
              <div className="deck-count">底牌: {remainingCards.length}张</div>
            </div>
          </div>
          
          {/* 右侧对手 */}
          <div className="opponent-area right">
            <PlayerView 
              name={players[3].name}
              score={players[3].score}
              cardCount={playerHands[3]?.length || 0}
              isActive={players[3].isActive}
              isLandlord={players[3].role === 'landlord'}
              isPartner={players[3].role === 'farmer'}
              className="position-right"
            />
            <div className="opponent-hand-area">
              {renderPlayerHand(3)}
            </div>
          </div>
        </div>
        
        {/* 玩家区域 */}
        <div className="player-area">
          <PlayerView 
            name={players[0].name}
            score={players[0].score}
            cardCount={playerHands[0]?.length || 0}
            isActive={players[0].isActive}
            isLandlord={players[0].role === 'landlord'}
            isPartner={players[0].role === 'farmer'}
            className="position-bottom"
          />
          
          <div className="player-cards">
            {playerHands[0] && playerHands[0].length > 0 ? (
              <HandView 
                cards={playerHands[0]}
                onCardSelect={handleCardSelect}
                isActive={players[0].isActive}
              />
            ) : (
              <div className="hand-placeholder">游戏未开始</div>
            )}
          </div>
          
          <div className="player-controls">
            <GameControls 
              onPlay={handlePlayCards}
              onPass={handlePass}
              onReset={startNewGame}
              canPlay={selectedCards.length > 0 && players[0].isActive}
              canPass={players[0].isActive && lastPlayedCards.length > 0}
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default GamePage; 