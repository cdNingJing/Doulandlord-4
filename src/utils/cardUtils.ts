import { Card, CardRank, CardSuit, CARD_RANK_VALUE, CARD_SUIT_COLOR } from './cardTypes';
import { v4 as uuidv4 } from 'uuid';

// 创建一副完整的牌（55张，含大小王和百变牌）
export function createDeck(): Card[] {
  const deck: Card[] = [];
  
  // 添加普通扑克牌（除大小王外）
  const suits = [CardSuit.SPADE, CardSuit.HEART, CardSuit.CLUB, CardSuit.DIAMOND];
  const ranks = [
    CardRank.THREE, CardRank.FOUR, CardRank.FIVE, CardRank.SIX,
    CardRank.SEVEN, CardRank.EIGHT, CardRank.NINE, CardRank.TEN,
    CardRank.JACK, CardRank.QUEEN, CardRank.KING, CardRank.ACE,
    CardRank.TWO
  ];
  
  // 生成普通牌
  for (const suit of suits) {
    for (const rank of ranks) {
      deck.push({
        id: uuidv4(),
        suit,
        rank,
        value: CARD_RANK_VALUE[rank],
        isFaceUp: true,
        isSelected: false
      });
    }
  }
  
  // 添加大小王
  deck.push({
    id: uuidv4(),
    suit: CardSuit.JOKER,
    rank: CardRank.SMALL_JOKER,
    value: CARD_RANK_VALUE[CardRank.SMALL_JOKER],
    isFaceUp: true,
    isSelected: false
  });
  
  deck.push({
    id: uuidv4(),
    suit: CardSuit.JOKER,
    rank: CardRank.BIG_JOKER,
    value: CARD_RANK_VALUE[CardRank.BIG_JOKER],
    isFaceUp: true,
    isSelected: false
  });
  
  // 添加百变牌
  deck.push({
    id: uuidv4(),
    suit: CardSuit.JOKER,
    rank: CardRank.VARIABLE,
    value: CARD_RANK_VALUE[CardRank.VARIABLE],
    isFaceUp: true,
    isSelected: false
  });
  
  return deck;
}

// 洗牌函数
export function shuffleDeck(deck: Card[]): Card[] {
  const newDeck = [...deck];
  for (let i = newDeck.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newDeck[i], newDeck[j]] = [newDeck[j], newDeck[i]];
  }
  return newDeck;
}

// 发牌函数（返回四个玩家的牌和底牌）
export function dealCards(deck: Card[]): Card[][] {
  const shuffledDeck = shuffleDeck(deck);
  
  // 四个玩家的牌和底牌
  const player1Cards: Card[] = [];
  const player2Cards: Card[] = [];
  const player3Cards: Card[] = [];
  const player4Cards: Card[] = [];
  const remainingCards: Card[] = [];
  
  // 依次分发给四个玩家，每人13张
  for (let i = 0; i < 52; i++) {
    const card = { ...shuffledDeck[i] };
    
    if (i % 4 === 0) {
      player1Cards.push(card);
    } else if (i % 4 === 1) {
      player2Cards.push(card);
    } else if (i % 4 === 2) {
      player3Cards.push(card);
    } else {
      player4Cards.push(card);
    }
  }
  
  // 剩余的牌作为底牌
  for (let i = 52; i < shuffledDeck.length; i++) {
    remainingCards.push({ ...shuffledDeck[i] });
  }
  
  // 为每个玩家的牌排序（按照点数从大到小）
  return [
    sortCards(player1Cards),
    sortCards(player2Cards),
    sortCards(player3Cards),
    sortCards(player4Cards),
    remainingCards
  ];
}

// 卡牌排序（按点数从大到小）
export function sortCards(cards: Card[]): Card[] {
  return [...cards].sort((a, b) => b.value - a.value);
}

// 获取卡牌的文件名（用于图片显示）
export function getCardImagePath(card: Card): string {
  // 处理特殊牌
  if (card.suit === CardSuit.JOKER) {
    if (card.rank === CardRank.BIG_JOKER) {
      return '/PNG-cards/red_joker.png';
    } else if (card.rank === CardRank.SMALL_JOKER) {
      return '/PNG-cards/black_joker.png';
    } else if (card.rank === CardRank.VARIABLE) {
      return '/PNG-cards/wild_joker.png';
    }
  }
  
  // 处理普通牌
  const suitMap: Record<CardSuit, string> = {
    [CardSuit.SPADE]: 'spades',
    [CardSuit.HEART]: 'hearts',
    [CardSuit.CLUB]: 'clubs',
    [CardSuit.DIAMOND]: 'diamonds',
    [CardSuit.JOKER]: 'joker' // 添加以满足Record类型
  };
  
  const rankMap: Record<CardRank, string> = {
    [CardRank.ACE]: 'ace',
    [CardRank.TWO]: '2',
    [CardRank.THREE]: '3',
    [CardRank.FOUR]: '4',
    [CardRank.FIVE]: '5',
    [CardRank.SIX]: '6',
    [CardRank.SEVEN]: '7',
    [CardRank.EIGHT]: '8',
    [CardRank.NINE]: '9',
    [CardRank.TEN]: '10',
    [CardRank.JACK]: 'jack',
    [CardRank.QUEEN]: 'queen',
    [CardRank.KING]: 'king',
    [CardRank.SMALL_JOKER]: 'small_joker', // 添加以满足Record类型
    [CardRank.BIG_JOKER]: 'big_joker', // 添加以满足Record类型
    [CardRank.VARIABLE]: 'wild_joker' // 添加以满足Record类型
  };
  
  const suit = suitMap[card.suit];
  const rank = rankMap[card.rank];
  
  // 部分卡牌可能使用不同的文件名格式
  if (rank === 'queen' || rank === 'king' || rank === 'jack') {
    return `/PNG-cards/${rank}_of_${suit}2.png`;
  }
  
  return `/PNG-cards/${rank}_of_${suit}.png`;
}

// 获取卡牌CSS类名
export function getCardClassName(card: Card): string {
  let className = 'card';
  
  if (card.isSelected) {
    className += ' selected';
  }
  
  if (!card.isFaceUp) {
    className += ' face-down';
  }
  
  return className;
}

// 获取花色符号
export const getSuitSymbol = (suit: CardSuit): string => {
  switch (suit) {
    case CardSuit.SPADE:
      return '♠';
    case CardSuit.HEART:
      return '♥';
    case CardSuit.CLUB:
      return '♣';
    case CardSuit.DIAMOND:
      return '♦';
    case CardSuit.JOKER:
      return '';
    default:
      return '';
  }
};

// 翻转牌
export const flipCard = (card: Card): Card => {
  return {
    ...card,
    isFaceUp: !card.isFaceUp
  };
};

// 选择/取消选择牌
export const toggleCardSelection = (card: Card): Card => {
  return {
    ...card,
    isSelected: !card.isSelected
  };
}; 