import {
  Accessor,
  JSX,
  createContext,
  createSignal,
  useContext,
} from "solid-js";
import { Page, pages } from "../types";

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
  const delay = 0.33;

  return (
    <PageContext.Provider value={[page, setPage, delay]}>
      {props.children}
    </PageContext.Provider>
  );
}

export function usePageContext() {
  return useContext(PageContext) as PageContextType;
}
