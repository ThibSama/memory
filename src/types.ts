export interface Card {
  id: string;
  value: string;
  isFlipped: boolean;
  isMatched: boolean;
}

export interface GameStateType {
  cards: Card[];
  flippedCards: string[];
  movesCount: number;
  startTime: number | null;
  statut: "idle" | "playing" | "won" | "lost";
}

export interface GameConfig {
  PAIRS_COUNT: number;
  FLIP_BACK_DELAY: number;
  VALUES: readonly string[];
  TIME_LIMIT: number | null;
  MOVE_LIMIT: number | null;
}
