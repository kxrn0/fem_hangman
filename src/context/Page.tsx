import {
  Accessor,
  JSX,
  createContext,
  createSignal,
  onMount,
  useContext,
} from "solid-js";
import { Page, pages } from "../types";
import { useMatch } from "@solidjs/router";

const PageContext = createContext();

type PageContextType = [
  page: Accessor<Page>,
  setPage: (page: Page) => void,
  delay: number
];

type Props = {
  children: JSX.Element;
};

export function PageContextProvider(props: Props) {
  const [page, setPage] = createSignal(pages.start);
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
    <PageContext.Provider value={[page, setPage, delay]}>
      {props.children}
    </PageContext.Provider>
  );
}

export function usePageContext() {
  return useContext(PageContext) as PageContextType;
}
