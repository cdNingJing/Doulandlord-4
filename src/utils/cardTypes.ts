// 扑克牌花色枚举
export enum CardSuit {
  SPADE = '黑桃',   // 黑桃 ♠
  HEART = '红桃',   // 红桃 ♥
  CLUB = '梅花',    // 梅花 ♣
  DIAMOND = '方块',  // 方块 ♦
  JOKER = '王牌',    // 王牌
}

// 扑克牌点数枚举
export enum CardRank {
  THREE = '3',
  FOUR = '4',
  FIVE = '5',
  SIX = '6',
  SEVEN = '7',
  EIGHT = '8',
  NINE = '9',
  TEN = '10',
  JACK = 'J',
  QUEEN = 'Q',
  KING = 'K',
  ACE = 'A',
  TWO = '2',
  SMALL_JOKER = '小王',
  BIG_JOKER = '大王',
  VARIABLE = '百变',
}

// 扑克牌点数权值映射
export const CARD_RANK_VALUE: Record<CardRank, number> = {
  [CardRank.THREE]: 3,
  [CardRank.FOUR]: 4,
  [CardRank.FIVE]: 5,
  [CardRank.SIX]: 6,
  [CardRank.SEVEN]: 7,
  [CardRank.EIGHT]: 8,
  [CardRank.NINE]: 9,
  [CardRank.TEN]: 10,
  [CardRank.JACK]: 11,
  [CardRank.QUEEN]: 12,
  [CardRank.KING]: 13,
  [CardRank.ACE]: 14,
  [CardRank.TWO]: 15,
  [CardRank.SMALL_JOKER]: 16,
  [CardRank.BIG_JOKER]: 17,
  [CardRank.VARIABLE]: 18,
};

// 扑克牌颜色映射
export const CARD_SUIT_COLOR: Record<CardSuit, string> = {
  [CardSuit.SPADE]: 'black',
  [CardSuit.HEART]: 'red',
  [CardSuit.CLUB]: 'black',
  [CardSuit.DIAMOND]: 'red',
  [CardSuit.JOKER]: 'multicolor',
};

// 扑克牌类型接口
export interface Card {
  id: string;       // 卡牌唯一标识
  suit: CardSuit;   // 花色
  rank: CardRank;   // 点数
  value: number;    // 权值
  isFaceUp: boolean; // 是否正面朝上
  isSelected: boolean; // 是否被选中
}

// 牌型枚举
export enum CardType {
  SINGLE = '单张',
  PAIR = '对子',
  TRIO = '三张',
  TRIO_WITH_ONE = '三带一',
  STRAIGHT = '顺子',
  STRAIGHT_PAIR = '连对',
  AIRPLANE = '飞机',
  BOMB = '炸弹',
  TRIO_WITH_VARIABLE = '三带变',
  BOMB_WITH_VARIABLE = '炸带变',
  DOUBLE_BOMB = '双炸弹',
  DOUBLE_BOMB_WITH_VARIABLE = '双炸带变',
  INVALID = '无效牌型',
} 