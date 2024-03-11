import {
  Accessor,
  JSX,
  createContext,
  createSignal,
  onMount,
  useContext,
} from "solid-js";
import { Page } from "../types";
import { useMatch } from "@solidjs/router";

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

const PageContext = createContext();

type PageContextType = [
  delay: number,
  pageObj: {
    page: Accessor<Page>;
    set_page: (page: Page) => void;
  },
  transObj: {
    isTrans: Accessor<boolean>;
    set_is_trans: (isTrans: boolean) => void;
  }
];

type Props = {
  children: JSX.Element;
};

export function PageContextProvider(props: Props) {
  const [page, setPage] = createSignal(pages.start);
  const [isTrans, setIsTrans] = createSignal(false);
  const matchesStart = useMatch(() => pages.start.href);
  const matchesInstructions = useMatch(() => pages.instructions.href);
  const matchesCats = useMatch(() => pages.categories.href);
  const matchesGame = useMatch(() => pages.game.href);
  const delay = 0.33;

  onMount(() => {
    if (matchesStart()) setPage(pages.start);
    else if (matchesInstructions()) setPage(pages.instructions);
    else if (matchesCats()) setPage(pages.categories);
    else if (matchesGame()) setPage(pages.game);
  });

  return (
    <PageContext.Provider
      value={[
        delay,
        { page, set_page: setPage },
        { isTrans, set_is_trans: setIsTrans },
      ]}
    >
      {props.children}
    </PageContext.Provider>
  );
}

export function usePageContext() {
  return useContext(PageContext) as PageContextType;
}
