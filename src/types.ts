const root = "/fem_hangman/";

export const pages = {
  start: {
    name: "start",
    href: root,
  },
  instructions: {
    name: "instructions",
    href: `${root}instructions`,
  },
  categories: {
    name: "categories",
    href: `${root}categories`,
  },
  game: {
    name: "game",
    href: `${root}game`,
  },
};

export type Page = {
  name: string;
  href: "string";
};
