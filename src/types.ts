export type Page = {
  name: string;
  href: string;
};

export type Category =
  | "countries"
  | "history"
  | "medicine"
  | "geography"
  | "manga"
  | "chemistry";

export type Letter = {
  char: string;
  guessed: boolean;
};

export type Key = {
  char: string;
  clicked: boolean;
};

export type GameState =
  | "playing"
  | "loading"
  | "paused"
  | "win"
  | "lose"
  | "out";
