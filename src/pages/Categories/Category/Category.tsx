import SCCategory from "./Category.styled.tsx";
import Sink from "../../../components/Sink/Sink.tsx";
import { pages } from "../../../types.ts";
import { usePageContext } from "../../../context/Page.tsx";

type Props = {
  name: string;
  param: string;
  index: string;
};

export default function Category(props: Props) {
  const [page, setPage, delay] = usePageContext();
  const actualDelay = delay * 2;
  const nextPage = {
    ...pages.game,
    href: `${pages.game.href}?category=${props.param}`,
  };
  const currentPage = pages.categories;

  return (
    <SCCategory class="category">
      <Sink page={nextPage} delay={actualDelay} set_page={setPage}>
        <p
          class="category-button bordered fam-nip content anime-enter"
          classList={{ "anime-exit": page().name !== currentPage.name }}
          style={{ "--index": props.index }}
        >
          {props.name}
        </p>
      </Sink>
    </SCCategory>
  );
}
