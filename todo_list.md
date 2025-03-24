# 四人斗地主开发待办事项

## 📋 项目初始化阶段

### 1. 环境搭建
- [ ] 创建项目目录
  - [ ] 在当前目录下创建 React 项目 `npx create-react-app .`
  - [ ] 初始化 Git 仓库 `git init`
  - [ ] 创建 `.gitignore` 文件（如果 create-react-app 没有自动创建）
  - [ ] 创建初始提交 `git add . && git commit -m "初始化项目"`

### 2. 依赖安装
- [ ] 安装核心依赖
  - [ ] `npm install tailwindcss postcss autoprefixer`
  - [ ] `npm install framer-motion`
  - [ ] `npm install @heroicons/react`（图标库）
  - [ ] `npm install clsx`（条件类名管理）
  - [ ] `npm install react-svg`（用于渲染 SVG 图标）
  - [ ] `npm install @types/react-svg`（TypeScript 类型支持）

### 3. 扑克牌资源准备
- [ ] 创建扑克牌组件
  - [ ] 创建卡牌背景组件
  - [ ] 创建卡牌正面组件
  - [ ] 实现卡牌状态管理

- [ ] 准备花色和数字资源
  - [ ] 准备花色图标
  - [ ] 准备特殊牌图标
  - [ ] 设计百变牌样式

- [ ] 样式规范
  - [ ] 定义卡牌基础样式
  - [ ] 定义花色颜色规范
  - [ ] 定义字体设置规范

### 4. 项目配置
- [ ] 配置 TypeScript
  - [ ] 安装 TypeScript 相关依赖
  - [ ] 创建 TypeScript 配置文件
  - [ ] 配置 TypeScript 选项

- [ ] 配置 Tailwind CSS
  - [ ] 初始化 Tailwind 配置
  - [ ] 配置主题变量
  - [ ] 更新样式文件

- [ ] 配置 ESLint 和 Prettier
  - [ ] 安装开发依赖
  - [ ] 创建 ESLint 配置
  - [ ] 创建 Prettier 配置

- [ ] 配置路径别名
  - [ ] 更新 TypeScript 配置
  - [ ] 配置模块导入路径

- [ ] 创建 Netlify 配置文件
  - [ ] 配置构建命令
  - [ ] 配置发布目录
  - [ ] 配置环境变量

## 🎮 游戏核心逻辑开发

### 1. 基础数据结构
- [ ] 实现牌型定义
  - [ ] 定义花色枚举
  - [ ] 定义点数枚举
  - [ ] 定义牌型枚举
  - [ ] 定义牌型组合接口

- [ ] 实现玩家相关
  - [ ] 定义玩家角色枚举
  - [ ] 定义玩家状态枚举
  - [ ] 定义玩家信息接口

- [ ] 实现游戏状态
  - [ ] 定义游戏阶段枚举
  - [ ] 定义游戏状态接口
  - [ ] 定义历史记录接口

- [ ] 实现游戏配置
  - [ ] 定义游戏配置接口
  - [ ] 定义默认配置常量

- [ ] 实现游戏事件
  - [ ] 定义事件类型枚举
  - [ ] 定义事件接口

### 2. 待开发功能

#### 2.1 基础功能
- [ ] 实现牌型定义和判定
  - [ ] 创建牌型定义文件
  - [ ] 创建牌型判断工具
  - [ ] 实现百变牌处理
  - [ ] 实现炸弹规则

- [ ] 实现玩家状态管理
  - [ ] 创建玩家类型定义
  - [ ] 创建玩家状态管理
  - [ ] 实现手牌管理
  - [ ] 实现分数计算

- [ ] 实现游戏状态管理
  - [ ] 创建游戏类型定义
  - [ ] 创建游戏状态管理
  - [ ] 实现流程控制
  - [ ] 实现历史记录

- [ ] 实现游戏配置管理
  - [ ] 创建配置类型定义
  - [ ] 创建配置管理工具
  - [ ] 实现配置加载
  - [ ] 实现配置验证

- [ ] 实现游戏事件系统
  - [ ] 创建事件类型定义
  - [ ] 创建事件总线
  - [ ] 实现事件发布订阅
  - [ ] 实现事件日志

#### 2.2 游戏逻辑
- [ ] 实现发牌逻辑
  - [ ] 实现洗牌算法
  - [ ] 实现发牌流程
  - [ ] 实现庄家确定

- [ ] 实现叫牌逻辑
  - [ ] 创建 `src/components/Card` 目录
  - [ ] 创建 `CardBackground.tsx`（卡牌背景组件）
    ```tsx
    // 使用 Tailwind CSS 实现卡牌背景
    // - 白色背景
    // - 圆角边框
    // - 阴影效果
    // - 悬浮动画
    ```
  - [ ] 创建 `CardFront.tsx`（卡牌正面组件）
    ```tsx
    // 组合背景和花色/数字
    // 支持不同的花色和数字组合
    // 支持选中状态样式
    ```

- [ ] 准备花色和数字资源
  - [ ] 在 `public/assets/cards` 下创建：
    - [ ] `suits`（花色图标）
      - `spade.png`（黑桃）
      - `heart.png`（红心）
      - `club.png`（梅花）
      - `diamond.png`（方块）
    - [ ] `special`（特殊牌）
      - `joker_red.png`（大王）
      - `joker_black.png`（小王）
      - `transform_card.png`（百变牌）
        - 设计：简单的白色背景
        - 中心图案：使用"变"字
        - 角标：左上和右下使用"变"字

- [ ] 样式规范
  - [ ] 卡牌样式（使用 Tailwind CSS 实现）：
    ```css
    .card {
      @apply w-[140px] h-[196px] rounded-lg bg-white shadow-md
      hover:shadow-lg transition-all duration-200;
    }
    ```
  - [ ] 花色颜色：
    - 黑色（♠♣）：#000000
    - 红色（♥♦）：#FF0000
  - [ ] 字体设置：
    - 数字：Arial 或 Sans-serif
    - 大小：根据卡牌尺寸自适应

- [ ] 组件状态
  - [ ] 普通状态
  - [ ] 选中状态（边框高亮）
  - [ ] 禁用状态（灰度显示）
  - [ ] 翻转状态（背面效果）

### 4. 项目配置
- [ ] 配置 TypeScript
  - [ ] 安装 TypeScript：`npm install typescript @types/node @types/react @types/react-dom @types/jest`
  - [ ] 创建 `tsconfig.json`：`npx tsc --init`
  - [ ] 配置 TypeScript 选项（strict mode, paths 等）

- [ ] 配置 Tailwind CSS
  - [ ] 初始化 Tailwind 配置 `npx tailwindcss init -p`
  - [ ] 配置 `tailwind.config.js`
    ```js
    module.exports = {
      content: ["./src/**/*.{js,jsx,ts,tsx}"],
      theme: {
        extend: {
          // 自定义颜色
          colors: {
            'card-red': '#FF0000',
            'card-black': '#000000',
          },
          // 自定义尺寸
          spacing: {
            'card-w': '140px',
            'card-h': '196px',
          }
        }
      }
    }
    ```
  - [ ] 更新 `src/index.css`
    ```css
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
    ```

- [ ] 配置 ESLint 和 Prettier
  - [ ] 安装开发依赖
    ```bash
    npm install -D eslint prettier
    npm install -D eslint-config-prettier eslint-plugin-prettier
    npm install -D @typescript-eslint/parser @typescript-eslint/eslint-plugin
    ```
  - [ ] 创建 `.eslintrc.js`
    ```js
    module.exports = {
      parser: '@typescript-eslint/parser',
      plugins: ['@typescript-eslint', 'prettier'],
      extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:prettier/recommended'
      ]
    }
    ```
  - [ ] 创建 `.prettierrc`
    ```json
    {
      "singleQuote": true,
      "trailingComma": "es5",
      "printWidth": 100,
      "semi": true
    }
    ```

- [ ] 配置路径别名
  - [ ] 更新 `tsconfig.json`
    ```json
    {
      "compilerOptions": {
        "baseUrl": "src",
        "paths": {
          "@/*": ["*"],
          "@components/*": ["components/*"],
          "@utils/*": ["utils/*"],
          "@hooks/*": ["hooks/*"],
          "@assets/*": ["assets/*"]
        }
      }
    }
    ```

- [ ] 创建 Netlify 配置文件
  - [ ] 创建 `netlify.toml`
    ```toml
    [build]
      command = "npm run build"
      publish = "build"

    [[redirects]]
      from = "/*"
      to = "/index.html"
      status = 200
    ```
  - [ ] 配置环境变量（如果需要）
  - [ ] 配置构建命令和发布目录

- [ ] 配置开发脚本
  - [ ] 更新 `package.json` 的 scripts 部分
    ```json
    {
      "scripts": {
        "start": "react-scripts start",
        "build": "react-scripts build",
        "test": "react-scripts test",
        "eject": "react-scripts eject",
        "lint": "eslint src --ext .ts,.tsx",
        "lint:fix": "eslint src --ext .ts,.tsx --fix",
        "format": "prettier --write \"src/**/*.{ts,tsx,css,md}\""
      }
    }
    ```

## 🎮 游戏核心逻辑开发

## 1️⃣ 基础数据结构

### 1.1 牌型定义
```typescript
// 牌的花色
enum Suit {
  SPADE = "♠",    // 黑桃
  HEART = "♥",    // 红桃
  CLUB = "♣",     // 梅花
  DIAMOND = "♦"   // 方块
}

// 牌的点数
enum Rank {
  THREE = "3",
  FOUR = "4",
  FIVE = "5",
  SIX = "6",
  SEVEN = "7",
  EIGHT = "8",
  NINE = "9",
  TEN = "10",
  JACK = "J",
  QUEEN = "Q",
  KING = "K",
  ACE = "A",
  TWO = "2",
  JOKER_SMALL = "小王",
  JOKER_BIG = "大王",
  WILD = "百变牌"
}

// 单张牌
interface Card {
  suit: Suit;
  rank: Rank;
  isWild: boolean;  // 是否是百变牌
}

// 牌型枚举
enum CardType {
  SINGLE = "单张",
  PAIR = "对子",
  TRIO = "三张",
  TRIO_ONE = "三带一",
  SEQUENCE = "顺子",
  PAIRS = "连对",
  AIRPLANE = "飞机",
  BOMB = "炸弹"
}

// 牌型组合
interface CardCombination {
  type: CardType;
  cards: Card[];
  value: number;  // 用于比较大小
}
```

### 1.2 玩家相关
```typescript
// 玩家角色
enum PlayerRole {
  LANDLORD = "地主",
  TEAMMATE = "队友",
  FARMER = "农民"
}

// 玩家状态
enum PlayerStatus {
  WAITING = "等待中",
  CALLING = "叫牌中",
  PLAYING = "出牌中",
  FINISHED = "已出完",
  EXITED = "已退出"
}

// 玩家信息
interface Player {
  id: string;
  name: string;
  role: PlayerRole;
  status: PlayerStatus;
  handCards: Card[];
  score: number;
  isAI: boolean;
  aiLevel?: "简单" | "中等" | "困难";
}
```

### 1.3 游戏状态
```typescript
// 游戏阶段
enum GamePhase {
  DEALING = "发牌阶段",
  CALLING = "叫牌阶段",
  PLAYING = "出牌阶段",
  ENDED = "游戏结束"
}

// 游戏状态
interface GameState {
  phase: GamePhase;
  currentPlayer: string;  // 当前玩家ID
  lastPlay: CardCombination | null;  // 上一次出的牌
  lastPlayer: string | null;  // 上一次出牌的玩家
  bottomCards: Card[];  // 底牌
  multiplier: number;  // 当前倍数
  springMultiplier: number;  // 春天倍数
  bombMultiplier: number;  // 炸弹倍数
  players: Player[];
  winner: string | null;  // 获胜队伍
  history: GameHistory[];  // 历史记录
}

// 历史记录
interface GameHistory {
  round: number;
  winner: string;
  score: number;
  players: {
    id: string;
    finalScore: number;
  }[];
}
```

### 1.4 游戏配置
```typescript
// 游戏配置
interface GameConfig {
  initialScore: number;  // 初始分数
  baseScore: number;     // 基础分
  timeLimit: number;     // 出牌时间限制（秒）
  maxPlayers: number;    // 最大玩家数
  aiLevels: string[];    // AI难度选项
}

// 默认配置
const DEFAULT_CONFIG: GameConfig = {
  initialScore: 100,
  baseScore: 2,
  timeLimit: 30,
  maxPlayers: 4,
  aiLevels: ["简单", "中等", "困难"]
};
```

### 1.5 游戏事件
```typescript
// 游戏事件类型
enum GameEventType {
  DEAL_CARDS = "发牌",
  CALL_CARD = "叫牌",
  PLAY_CARDS = "出牌",
  BOMB = "炸弹",
  SPRING = "春天",
  GAME_END = "游戏结束"
}

// 游戏事件
interface GameEvent {
  type: GameEventType;
  playerId: string;
  timestamp: number;
  data: any;  // 事件相关数据
}
```

## 2️⃣ 待开发功能

### 2.1 基础功能
- [ ] 实现牌型定义和判定
  - [ ] 创建 `src/types/card.ts`
    - [ ] 实现花色枚举（Suit）
    - [ ] 实现点数枚举（Rank）
    - [ ] 实现牌型枚举（CardType）
    - [ ] 实现牌型组合接口（CardCombination）
  - [ ] 创建 `src/utils/cardPattern.ts`
    - [ ] 实现牌型判断函数
    - [ ] 实现牌型比较函数
    - [ ] 实现百变牌处理逻辑
    - [ ] 实现炸弹特殊规则

- [ ] 实现玩家状态管理
  - [ ] 创建 `src/types/player.ts`
    - [ ] 实现玩家角色枚举（PlayerRole）
    - [ ] 实现玩家状态枚举（PlayerStatus）
    - [ ] 实现玩家信息接口（Player）
  - [ ] 创建 `src/store/playerStore.ts`
    - [ ] 实现玩家状态更新逻辑
    - [ ] 实现玩家手牌管理
    - [ ] 实现玩家分数计算
    - [ ] 实现玩家状态转换

- [ ] 实现游戏状态管理
  - [ ] 创建 `src/types/game.ts`
    - [ ] 实现游戏阶段枚举（GamePhase）
    - [ ] 实现游戏状态接口（GameState）
    - [ ] 实现历史记录接口（GameHistory）
  - [ ] 创建 `src/store/gameStore.ts`
    - [ ] 实现游戏状态更新逻辑
    - [ ] 实现游戏流程控制
    - [ ] 实现历史记录管理
    - [ ] 实现游戏重置逻辑

- [ ] 实现游戏配置管理
  - [ ] 创建 `src/types/config.ts`
    - [ ] 实现游戏配置接口（GameConfig）
    - [ ] 实现默认配置常量（DEFAULT_CONFIG）
  - [ ] 创建 `src/utils/config.ts`
    - [ ] 实现配置加载函数
    - [ ] 实现配置验证函数
    - [ ] 实现配置更新函数
    - [ ] 实现配置持久化

- [ ] 实现游戏事件系统
  - [ ] 创建 `src/types/event.ts`
    - [ ] 实现事件类型枚举（GameEventType）
    - [ ] 实现事件接口（GameEvent）
  - [ ] 创建 `src/utils/eventBus.ts`
    - [ ] 实现事件发布订阅机制
    - [ ] 实现事件队列管理
    - [ ] 实现事件优先级处理
    - [ ] 实现事件日志记录

- [ ] 实现工具函数库
  - [ ] 创建 `src/utils/shuffle.ts`
    - [ ] 实现 Fisher-Yates 洗牌算法
    - [ ] 实现牌堆初始化
  - [ ] 创建 `src/utils/validation.ts`
    - [ ] 实现输入验证函数
    - [ ] 实现规则验证函数
    - [ ] 实现状态验证函数
  - [ ] 创建 `src/utils/helper.ts`
    - [ ] 实现通用辅助函数
    - [ ] 实现常量定义
    - [ ] 实现类型转换函数

- [ ] 实现错误处理系统
  - [ ] 创建 `src/types/error.ts`
    - [ ] 实现错误类型枚举
    - [ ] 实现错误信息接口
  - [ ] 创建 `src/utils/errorHandler.ts`
    - [ ] 实现错误捕获机制
    - [ ] 实现错误日志记录
    - [ ] 实现错误提示显示
    - [ ] 实现错误恢复机制

- [ ] 实现日志系统
  - [ ] 创建 `src/utils/logger.ts`
    - [ ] 实现日志级别定义
    - [ ] 实现日志记录函数
    - [ ] 实现日志过滤功能
    - [ ] 实现日志导出功能
  - [ ] 创建 `src/types/log.ts`
    - [ ] 实现日志类型定义
    - [ ] 实现日志配置接口

### 2.2 游戏逻辑
- [ ] 实现发牌逻辑
  - [ ] 创建 `src/logic/dealing.ts`
    - [ ] 实现洗牌算法
      - [ ] 使用 Fisher-Yates 算法
      - [ ] 确保随机性
    - [ ] 实现发牌流程
      - [ ] 每人发13张牌
      - [ ] 预留3张底牌
      - [ ] 确定庄家位置
    - [ ] 实现庄家确定逻辑
      - [ ] 根据最后一张牌确定庄家
      - [ ] 处理特殊情况（大王、小王、百变牌）
      - [ ] 计算座位号（1-4）

- [ ] 实现叫牌逻辑
  - [ ] 创建 `src/logic/calling.ts`
    - [ ] 实现骰子点数计算
      - [ ] 生成1-6随机数
      - [ ] 计算点数总和
      - [ ] 转换为叫牌点数（2-Q）
    - [ ] 实现叫牌流程
      - [ ] 庄家选择花色和点数
      - [ ] 30秒时间限制
      - [ ] 超时随机选择
    - [ ] 实现队友确定逻辑
      - [ ] 处理底牌情况（3打1模式）
      - [ ] 处理庄家手牌情况
      - [ ] 处理队友手牌情况
    - [ ] 实现加倍机制
      - [ ] 农民轮流加倍
      - [ ] 庄家加倍
      - [ ] 计算最终倍数

- [ ] 实现出牌逻辑
  - [ ] 创建 `src/logic/playing.ts`
    - [ ] 实现出牌规则验证
      - [ ] 验证牌型合法性
      - [ ] 验证牌型大小
      - [ ] 处理特殊牌（百变牌）
    - [ ] 实现出牌流程控制
      - [ ] 30秒时间限制
      - [ ] 超时自动过牌
      - [ ] 出牌顺序控制
    - [ ] 实现炸弹规则
      - [ ] 炸弹打断机制
      - [ ] 炸弹大小比较
      - [ ] 炸弹倍数计算
    - [ ] 实现过牌规则
      - [ ] 一轮过牌处理
      - [ ] 继续出牌机制
      - [ ] 过牌后接牌限制

- [ ] 实现胜负判定
  - [ ] 创建 `src/logic/winning.ts`
    - [ ] 实现胜利条件判断
      - [ ] 地主队胜利条件
      - [ ] 农民队胜利条件
    - [ ] 实现春天判定
      - [ ] 地主春天判定
      - [ ] 农民反春天判定
    - [ ] 实现队伍判定
      - [ ] 确定获胜队伍
      - [ ] 计算队伍得分

- [ ] 实现计分系统
  - [ ] 创建 `src/logic/scoring.ts`
    - [ ] 实现基础分计算
      - [ ] 设置基础分（2分）
      - [ ] 计算倍数
    - [ ] 实现特殊加分
      - [ ] 春天倍数（2倍或4倍）
      - [ ] 炸弹倍数（每个炸弹2倍）
      - [ ] 加倍倍数
    - [ ] 实现最终得分计算
      - [ ] 按顺序计算各项倍数
      - [ ] 计算最终得分
    - [ ] 实现历史分数管理
      - [ ] 更新玩家基础分
      - [ ] 记录历史分数
      - [ ] 显示实时分数

- [ ] 实现游戏流程控制
  - [ ] 创建 `src/logic/gameFlow.ts`
    - [ ] 实现游戏阶段控制
      - [ ] 发牌阶段
      - [ ] 叫牌阶段
      - [ ] 出牌阶段
      - [ ] 结算阶段
    - [ ] 实现回合控制
      - [ ] 玩家轮次控制
      - [ ] 出牌顺序控制
      - [ ] 超时处理
    - [ ] 实现游戏重置
      - [ ] 重置游戏状态
      - [ ] 重置玩家状态
      - [ ] 重置分数系统

### 2.3 AI系统
- [ ] 实现AI基础架构
  - [ ] 创建 `src/ai/base.ts`
    - [ ] 实现AI基类
      - [ ] 定义AI接口
      - [ ] 实现基础决策方法
      - [ ] 实现牌型分析工具
    - [ ] 实现AI配置接口
      - [ ] 难度级别配置
      - [ ] 决策参数配置
      - [ ] 策略权重配置

- [ ] 实现简单AI
  - [ ] 创建 `src/ai/simpleAI.ts`
    ```typescript
    // 简单 AI 实现
    class SimpleAI {
      // 随机出牌
      playCards(handCards: Card[], lastPlay: CardCombination | null): CardCombination {
        // 1. 如果没有上家出牌，随机选择一张最小的牌
        if (!lastPlay) {
          return {
            type: CardType.SINGLE,
            cards: [this.getSmallestCard(handCards)],
            value: 0
          };
        }

        // 2. 尝试找到可以压过上家的牌
        const validPlays = this.findValidPlays(handCards, lastPlay);
        if (validPlays.length > 0) {
          // 随机选择一个有效的出牌
          return validPlays[Math.floor(Math.random() * validPlays.length)];
        }

        // 3. 如果没有可以压过的牌，返回空（过牌）
        return null;
      }

      // 叫牌策略
      callCard(handCards: Card[]): Card {
        // 随机选择一张非王牌的牌
        const validCards = handCards.filter(card => 
          card.rank !== Rank.JOKER_BIG && 
          card.rank !== Rank.JOKER_SMALL &&
          card.rank !== Rank.WILD
        );
        return validCards[Math.floor(Math.random() * validCards.length)];
      }

      // 加倍策略
      shouldDouble(handCards: Card[]): boolean {
        // 随机决定是否加倍
        return Math.random() > 0.5;
      }

      // 辅助方法
      private getSmallestCard(cards: Card[]): Card {
        return cards.reduce((min, card) => 
          this.getCardValue(card) < this.getCardValue(min) ? card : min
        );
      }

      private getCardValue(card: Card): number {
        const valueMap = {
          [Rank.THREE]: 3,
          [Rank.FOUR]: 4,
          [Rank.FIVE]: 5,
          [Rank.SIX]: 6,
          [Rank.SEVEN]: 7,
          [Rank.EIGHT]: 8,
          [Rank.NINE]: 9,
          [Rank.TEN]: 10,
          [Rank.JACK]: 11,
          [Rank.QUEEN]: 12,
          [Rank.KING]: 13,
          [Rank.ACE]: 14,
          [Rank.TWO]: 15,
          [Rank.JOKER_SMALL]: 16,
          [Rank.JOKER_BIG]: 17
        };
        return valueMap[card.rank] || 0;
      }

      private findValidPlays(handCards: Card[], lastPlay: CardCombination): CardCombination[] {
        // 简单实现：只考虑单张和对子
        const validPlays: CardCombination[] = [];
        
        // 如果是单张
        if (lastPlay.type === CardType.SINGLE) {
          handCards.forEach(card => {
            if (this.getCardValue(card) > this.getCardValue(lastPlay.cards[0])) {
              validPlays.push({
                type: CardType.SINGLE,
                cards: [card],
                value: this.getCardValue(card)
              });
            }
          });
        }
        
        // 如果是对子
        if (lastPlay.type === CardType.PAIR) {
          const lastValue = this.getCardValue(lastPlay.cards[0]);
          for (let i = 0; i < handCards.length - 1; i++) {
            for (let j = i + 1; j < handCards.length; j++) {
              if (handCards[i].rank === handCards[j].rank &&
                  this.getCardValue(handCards[i]) > lastValue) {
                validPlays.push({
                  type: CardType.PAIR,
                  cards: [handCards[i], handCards[j]],
                  value: this.getCardValue(handCards[i])
                });
              }
            }
          }
        }

        return validPlays;
      }
    }
    ```

- [ ] 实现中等AI
  - [ ] 创建 `src/ai/mediumAI.ts`
    - [ ] 实现基础策略出牌
      - [ ] 优先出单张和对子
      - [ ] 保留炸弹和顺子
      - [ ] 考虑上家牌型
    - [ ] 实现叫牌策略
      - [ ] 根据手牌选择花色
      - [ ] 优先选择手牌多的花色
      - [ ] 避免选择特殊牌
    - [ ] 实现加倍策略
      - [ ] 根据手牌强度决定
      - [ ] 考虑炸弹数量
      - [ ] 考虑特殊牌型

- [ ] 实现困难AI
  - [ ] 创建 `src/ai/hardAI.ts`
    - [ ] 实现高级出牌策略
      - [ ] 分析对手牌型
      - [ ] 预测对手手牌
      - [ ] 优化出牌顺序
      - [ ] 控制牌型节奏
    - [ ] 实现高级叫牌策略
      - [ ] 分析手牌结构
      - [ ] 预测队友位置
      - [ ] 考虑底牌影响
      - [ ] 优化叫牌选择
    - [ ] 实现高级加倍策略
      - [ ] 分析手牌强度
      - [ ] 预测对手牌型
      - [ ] 计算期望收益
      - [ ] 优化加倍时机

- [ ] 实现AI决策系统
  - [ ] 创建 `src/ai/decision.ts`
    - [ ] 实现牌型分析
      - [ ] 统计牌型分布
      - [ ] 计算牌型强度
      - [ ] 预测剩余牌型
    - [ ] 实现策略选择
      - [ ] 评估当前局势
      - [ ] 计算最优策略
      - [ ] 调整策略权重
    - [ ] 实现风险评估
      - [ ] 计算风险系数
      - [ ] 评估收益期望
      - [ ] 优化决策平衡

- [ ] 实现AI辅助功能
  - [ ] 创建 `src/ai/helper.ts`
    - [ ] 实现牌型识别
      - [ ] 识别当前牌型
      - [ ] 计算牌型大小
      - [ ] 处理特殊牌型
    - [ ] 实现手牌分析
      - [ ] 统计手牌分布
      - [ ] 计算手牌强度
      - [ ] 预测出牌可能
    - [ ] 实现局势评估
      - [ ] 评估当前局势
      - [ ] 预测局势发展
      - [ ] 计算胜率概率

- [ ] 实现AI测试系统
  - [ ] 创建 `src/ai/test.ts`
      ```typescript
    // AI 测试用例
    describe('SimpleAI', () => {
      let ai: SimpleAI;
      
      beforeEach(() => {
        ai = new SimpleAI();
      });

      test('随机出牌', () => {
        const handCards = [
          { suit: Suit.SPADE, rank: Rank.THREE },
          { suit: Suit.HEART, rank: Rank.FOUR },
          { suit: Suit.CLUB, rank: Rank.FIVE }
        ];
        
        const play = ai.playCards(handCards, null);
        expect(play).toBeDefined();
        expect(play.cards.length).toBe(1);
      });

      test('叫牌', () => {
        const handCards = [
          { suit: Suit.SPADE, rank: Rank.THREE },
          { suit: Suit.HEART, rank: Rank.FOUR },
          { suit: Suit.CLUB, rank: Rank.FIVE }
        ];
        
        const call = ai.callCard(handCards);
        expect(call).toBeDefined();
        expect(call.rank).not.toBe(Rank.JOKER_BIG);
        expect(call.rank).not.toBe(Rank.JOKER_SMALL);
        expect(call.rank).not.toBe(Rank.WILD);
      });

      test('加倍决策', () => {
        const shouldDouble = ai.shouldDouble([]);
        expect(typeof shouldDouble).toBe('boolean');
      });
    });
    ```

- [ ] 创建 `src/ai/index.ts`
  ```typescript
  // AI 工厂函数
  export function createAI(level: 'simple' | 'medium' | 'hard') {
    switch (level) {
      case 'simple':
        return new SimpleAI();
      case 'medium':
        // TODO: 实现中等 AI
        return new SimpleAI();
      case 'hard':
        // TODO: 实现困难 AI
        return new SimpleAI();
      default:
        return new SimpleAI();
    }
  }
  ```

### 2.4 UI系统
- [ ] 实现游戏主界面
  - [ ] 创建 `src/components/game/`
    - [ ] 实现 `GameLayout.tsx`
      - [ ] 使用 antd 的 Layout 组件
      - [ ] 实现响应式布局
        - [ ] 桌面端布局（1200px以上）
        - [ ] 平板端布局（768px-1199px）
        - [ ] 移动端布局（768px以下）
      - [ ] 实现游戏区域划分
        - [ ] 顶部信息区
        - [ ] 中间游戏区
        - [ ] 底部操作区

- [ ] 实现玩家区域组件
  - [ ] 创建 `src/components/player/`
    - [ ] 实现 `PlayerArea.tsx`
      - [ ] 使用 antd 的 Card 组件
      - [ ] 实现玩家信息显示
        - [ ] 玩家头像（使用 Avatar 组件）
        - [ ] 玩家名称
        - [ ] 玩家角色（使用 Tag 组件）
        - [ ] 剩余牌数（使用 Badge 组件）
      - [ ] 实现玩家状态显示
        - [ ] 当前回合（使用 Tag 组件）
        - [ ] 出牌时间（使用 Progress 组件）
        - [ ] 历史分数（使用 Statistic 组件）

- [ ] 实现手牌区域组件
  - [ ] 创建 `src/components/hand/`
    - [ ] 实现 `HandCards.tsx`
      - [ ] 使用 antd 的 Row 和 Col 组件
      - [ ] 实现手牌布局
        - [ ] 水平排列
        - [ ] 自动换行
        - [ ] 间距调整
      - [ ] 实现手牌交互
        - [ ] 点击选择（使用 Checkbox 组件）
        - [ ] 拖拽排序（使用 SortableContainer）
        - [ ] 右键菜单（使用 Dropdown 组件）

- [ ] 实现出牌区域组件
  - [ ] 创建 `src/components/play/`
    - [ ] 实现 `PlayArea.tsx`
      - [ ] 使用 antd 的 Card 组件
      - [ ] 实现出牌展示
        - [ ] 当前牌型（使用 Tag 组件）
        - [ ] 出牌玩家（使用 Avatar 组件）
        - [ ] 出牌时间（使用 Progress 组件）
      - [ ] 实现出牌提示
        - [ ] 可出牌型（使用 Tooltip 组件）
        - [ ] 出牌建议（使用 Popover 组件）
        - [ ] 错误提示（使用 Alert 组件）

- [ ] 实现操作区域组件
  - [ ] 创建 `src/components/action/`
    - [ ] 实现 `ActionBar.tsx`
      - [ ] 使用 antd 的 Space 组件
      - [ ] 实现操作按钮
        - [ ] 出牌按钮（使用 Button 组件）
        - [ ] 过牌按钮（使用 Button 组件）
        - [ ] 加倍按钮（使用 Button 组件）
        - [ ] 提示按钮（使用 Button 组件）
      - [ ] 实现游戏控制
        - [ ] 开始按钮（使用 Button 组件）
        - [ ] 暂停按钮（使用 Button 组件）
        - [ ] 设置按钮（使用 Button 组件）

- [ ] 实现游戏信息组件
  - [ ] 创建 `src/components/info/`
    - [ ] 实现 `GameInfo.tsx`
      - [ ] 使用 antd 的 Card 组件
      - [ ] 实现游戏状态
        - [ ] 当前阶段（使用 Tag 组件）
        - [ ] 当前倍数（使用 Statistic 组件）
        - [ ] 剩余时间（使用 Progress 组件）
      - [ ] 实现游戏统计
        - [ ] 出牌记录（使用 List 组件）
        - [ ] 得分统计（使用 Statistic 组件）
        - [ ] 历史记录（使用 Table 组件）

- [ ] 实现游戏设置组件
  - [ ] 创建 `src/components/settings/`
    - [ ] 实现 `GameSettings.tsx`
      - [ ] 使用 antd 的 Form 组件
      - [ ] 实现基本设置
        - [ ] AI难度选择（使用 Select 组件）
        - [ ] 出牌时间设置（使用 InputNumber 组件）
        - [ ] 音效开关（使用 Switch 组件）
      - [ ] 实现高级设置
        - [ ] 主题选择（使用 Radio 组件）
        - [ ] 动画效果（使用 Switch 组件）
        - [ ] 提示设置（使用 Checkbox 组件）

- [ ] 实现游戏结果组件
  - [ ] 创建 `src/components/result/`
    - [ ] 实现 `GameResult.tsx`
      - [ ] 使用 antd 的 Modal 组件
      - [ ] 实现结果展示
        - [ ] 获胜队伍（使用 Tag 组件）
        - [ ] 得分统计（使用 Statistic 组件）
        - [ ] 特殊事件（使用 Alert 组件）
      - [ ] 实现操作按钮
        - [ ] 再来一局（使用 Button 组件）
        - [ ] 查看回放（使用 Button 组件）
        - [ ] 分享结果（使用 Button 组件）

## 🎨 UI 组件开发

### 1. 基础组件
- [ ] 安装 Ant Design
  - [ ] 安装依赖
    ```bash
    npm install antd @ant-design/icons
    ```
  - [ ] 配置主题
    - [ ] 创建 `src/styles/theme.ts`
      - [ ] 配置主题变量
      - [ ] 配置组件样式覆盖
    - [ ] 更新 `tailwind.config.js`
      - [ ] 添加 antd 主题变量

- [ ] 创建扑克牌组件
  - [ ] 创建 `src/components/card/`
    - [ ] 实现 `Card.tsx`
      - [ ] 使用 antd 的 Card 组件作为基础
      - [ ] 自定义卡牌样式
        - [ ] 设置尺寸（140x196px）
        - [ ] 添加圆角和阴影
        - [ ] 实现悬浮效果
      - [ ] 实现卡牌状态
        - [ ] 使用 antd 的 Tag 组件显示状态
        - [ ] 使用 antd 的 Tooltip 组件显示提示
      - [ ] 实现特殊牌
        - [ ] 使用 antd 的 Badge 组件显示特殊标记

- [ ] 创建按钮组件
  - [ ] 创建 `src/components/button/`
    - [ ] 实现 `GameButton.tsx`
      - [ ] 基于 antd 的 Button 组件封装
      - [ ] 实现游戏特定按钮类型
        - [ ] 出牌按钮
        - [ ] 过牌按钮
        - [ ] 加倍按钮
      - [ ] 添加游戏特定样式
        - [ ] 自定义颜色
        - [ ] 自定义大小
        - [ ] 自定义图标

- [ ] 创建提示组件
  - [ ] 创建 `src/components/tooltip/`
    - [ ] 实现 `GameTooltip.tsx`
      - [ ] 基于 antd 的 Tooltip 组件封装
      - [ ] 实现游戏特定提示
        - [ ] 出牌提示
        - [ ] 规则提示
        - [ ] 错误提示
      - [ ] 自定义提示样式
        - [ ] 自定义位置
        - [ ] 自定义动画
        - [ ] 自定义内容

- [ ] 创建对话框组件
  - [ ] 创建 `src/components/dialog/`
    - [ ] 实现 `GameDialog.tsx`
      - [ ] 基于 antd 的 Modal 组件封装
      - [ ] 实现游戏特定对话框
        - [ ] 游戏设置对话框
        - [ ] 游戏结果对话框
        - [ ] 确认对话框
      - [ ] 自定义对话框样式
        - [ ] 自定义标题
        - [ ] 自定义内容
        - [ ] 自定义按钮

- [ ] 创建加载组件
  - [ ] 创建 `src/components/loading/`
    - [ ] 实现 `GameLoading.tsx`
      - [ ] 基于 antd 的 Spin 组件封装
      - [ ] 实现游戏特定加载状态
        - [ ] 发牌加载
        - [ ] 出牌加载
        - [ ] 结算加载
      - [ ] 自定义加载样式
        - [ ] 自定义图标
        - [ ] 自定义文字
        - [ ] 自定义背景

- [ ] 创建输入组件
  - [ ] 创建 `src/components/input/`
    - [ ] 实现 `GameInput.tsx`
      - [ ] 基于 antd 的 Input 组件封装
      - [ ] 实现游戏特定输入
        - [ ] 玩家名称输入
        - [ ] 游戏设置输入
        - [ ] 搜索输入
      - [ ] 自定义输入样式
        - [ ] 自定义边框
        - [ ] 自定义图标
        - [ ] 自定义验证

- [ ] 创建通知组件
  - [ ] 创建 `src/components/notification/`
    - [ ] 实现 `GameNotification.tsx`
      - [ ] 基于 antd 的 notification 组件封装
      - [ ] 实现游戏特定通知
        - [ ] 出牌通知
        - [ ] 得分通知
        - [ ] 错误通知
      - [ ] 自定义通知样式
        - [ ] 自定义位置
        - [ ] 自定义动画
        - [ ] 自定义图标

### 2. 游戏界面组件
- [ ] 实现牌桌布局
  - [ ] 创建 `src/components/GameTable.tsx`
  - [ ] 实现玩家位置布局
- [ ] 实现玩家手牌区
  - [ ] 创建 `src/components/PlayerHand.tsx`
  - [ ] 实现手牌展示和选择
- [ ] 实现出牌区
  - [ ] 创建 `src/components/PlayArea.tsx`
  - [ ] 实现出牌展示

### 3. 动画效果
- [ ] 实现发牌动画
  - [ ] 使用 Framer Motion
  - [ ] 添加路径动画
- [ ] 实现出牌动画
  - [ ] 添加移动动画
  - [ ] 添加翻转效果
- [ ] 实现胜利动画
  - [ ] 添加庆祝效果
  - [ ] 添加过渡效果

## 🤖 AI 玩家开发

### 1. 基础 AI 逻辑
- [ ] 实现简单 AI

## 📝 文档完善

### 1. 技术文档
- [ ] 编写开发文档
  - [ ] 项目结构说明
  - [ ] 开发指南
- [ ] 编写 API 文档
  - [ ] 组件 API
  - [ ] 工具函数 API

### 2. 用户文档
- [ ] 编写使用说明
  - [ ] 游戏规则说明
  - [ ] 操作指南
- [ ] 编写常见问题
  - [ ] 问题解答
  - [ ] 故障排除

## 🎯 项目完成检查清单

### 1. 功能完整性
- [ ] 基础游戏功能完整
- [ ] AI 玩家功能正常
- [ ] 界面交互流畅
- [ ] 动画效果正常

### 2. 代码质量
- [ ] 代码规范符合要求
- [ ] 测试覆盖充分
- [ ] 性能指标达标
- [ ] 无严重 bug

### 3. 文档完整性
- [ ] 技术文档完整
- [ ] 用户文档完整
- [ ] 部署文档完整
- [ ] 代码注释充分

### 4. 发布准备
- [ ] 版本号确定
- [ ] 更新日志编写
- [ ] 发布说明准备
- [ ] 部署环境确认