import React, { useState, useEffect } from 'react';
import { Card, CardSuit, CardRank, CardType, CARD_RANK_VALUE } from '../utils/cardTypes';
import { createDeck, dealCards } from '../utils/cardUtils';
import CardView from '../components/card/CardView';
import CardStack from '../components/card/CardStack';
import HandView from '../components/card/HandView';
import PlayArea from '../components/card/PlayArea';
import PlayerView from '../components/player/PlayerView';
import GameControls from '../components/controls/GameControls';
import '../styles/demo.css';

const DemoPage: React.FC = () => {
  const [deck, setDeck] = useState<Card[]>([]);
  const [playerHand, setPlayerHand] = useState<Card[]>([]);
  const [selectedCards, setSelectedCards] = useState<Card[]>([]);
  const [playedCards, setPlayedCards] = useState<Card[]>([]);
  const [currentPlayer, setCurrentPlayer] = useState<string>("玩家");
  const [currentCardType, setCurrentCardType] = useState<string>("单张");
  const [playerScore, setPlayerScore] = useState<number>(100);

  // 初始化牌组
  useEffect(() => {
    const newDeck = createDeck();
    setDeck(newDeck);

    // 发牌
    const dealtCards = dealCards(newDeck);
    setPlayerHand(dealtCards[0].slice(0, 10)); // 只取前10张牌作为演示
  }, []);

  // 处理卡牌选择
  const handleCardSelect = (card: Card) => {
    setPlayerHand(prevHand => {
      return prevHand.map(c => {
        if (c.id === card.id) {
          return { ...c, isSelected: !c.isSelected };
        }
        return c;
      });
    });

    // 更新选中的卡牌列表
    setSelectedCards(prev => {
      const isAlreadySelected = prev.some(c => c.id === card.id);
      if (isAlreadySelected) {
        return prev.filter(c => c.id !== card.id);
      } else {
        return [...prev, card];
      }
    });
  };

  // 处理出牌
  const handlePlayCards = () => {
    if (selectedCards.length === 0) return;
    
    // 确定牌型
    let type: string = "单张";
    if (selectedCards.length === 1) type = "单张";
    else if (selectedCards.length === 2) type = "对子";
    else if (selectedCards.length === 3) type = "三张";
    else if (selectedCards.length === 4) type = "炸弹";
    else if (selectedCards.length === 5) type = "顺子";
    
    // 设置出牌记录
    setPlayedCards([...selectedCards]);
    setCurrentCardType(type);
    
    // 从手牌中移除已出的牌
    setPlayerHand(prevHand => 
      prevHand.filter(card => !selectedCards.some(sc => sc.id === card.id))
    );
    
    // 清空选中状态
    setSelectedCards([]);
  };

  // 重置游戏
  const handleReset = () => {
    const newDeck = createDeck();
    setDeck(newDeck);

    // 发牌
    const dealtCards = dealCards(newDeck);
    setPlayerHand(dealtCards[0].slice(0, 10)); // 只取前10张牌作为演示
    setPlayedCards([]);
    setSelectedCards([]);
  };

  // 模拟AI玩家出牌
  const handleAIPlay = () => {
    // 模拟AI玩家的手牌
    const aiCards = deck.slice(10, 15); // 随机取5张牌
    
    // 设置由AI玩家出牌
    setPlayedCards(aiCards);
    setCurrentPlayer("电脑");
    setCurrentCardType(aiCards.length === 1 ? "单张" : aiCards.length === 2 ? "对子" : "顺子");
  };

  return (
    <div className="demo-container">
      <header className="demo-header">
        <h1>斗地主组件演示</h1>
      </header>
      
      <main className="demo-content">
        <section className="demo-section">
          <h2>玩家信息</h2>
          <div className="player-demo">
            <PlayerView 
              name="玩家一"
              score={playerScore}
              isActive={true}
              isLandlord={true}
              cardCount={playerHand.length}
            />
            <div style={{margin: '0 10px'}}></div>
            <PlayerView 
              name="玩家二"
              score={85}
              isPartner={true}
              cardCount={13}
            />
            <div style={{margin: '0 10px'}}></div>
            <PlayerView 
              name="玩家三"
              score={120}
              cardCount={8}
            />
          </div>
        </section>

        <section className="demo-section">
          <h2>出牌区域</h2>
          <div className="play-area-demo">
            <PlayArea 
              cards={playedCards} 
              playerName={currentPlayer} 
              cardType={currentCardType as any}
            />
          </div>
        </section>
        
        <section className="demo-section">
          <h2>手牌区域</h2>
          <div className="hand-demo">
            <HandView 
              cards={playerHand} 
              onCardSelect={handleCardSelect}
              isActive={true}
            />
          </div>
        </section>
        
        <section className="demo-section">
          <h2>操作区域</h2>
          <div className="controls-demo">
            <div className="game-controls">
              <button 
                className="btn btn-primary" 
                onClick={handlePlayCards}
                disabled={selectedCards.length === 0}
              >
                出牌
              </button>
              <button 
                className="btn btn-secondary" 
                onClick={handleAIPlay}
              >
                AI玩家出牌
              </button>
              <button 
                className="btn btn-warning" 
                onClick={handleReset}
              >
                重置
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default DemoPage; 