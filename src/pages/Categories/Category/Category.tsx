import { createSignal, onCleanup } from "solid-js";
import SCCategory from "./Category.styled.tsx";
import get_observer from "../../../utilities/get_observer.ts";
import Sink from "../../../components/Sink/Sink.tsx";
import { pages } from "../../../types.ts";
import { usePageContext } from "../../../context/Page.tsx";

type Props = {
  name: string;
  param: string;
  isOut: boolean;
  index: string;
};

export default function Category(props: Props) {
  const [, setPage, delay] = usePageContext();
  const actualDelay = delay * 2;
  const [isVisible, setIsVisible] = createSignal(false);
  const [observer, setObserver] = createSignal<IntersectionObserver>();
  const page = {
    ...pages.game,
    href: `${pages.game.href}?category=${props.param}`,
  };

  function set_observer(element: HTMLElement) {
    const observer = get_observer(element, setIsVisible, 0.5, false);

    setObserver(observer);
  }

  onCleanup(() => observer()?.disconnect());

  return (
    <SCCategory ref={set_observer} class="category">
      <Sink page={page} delay={actualDelay} set_page={setPage}>
        <p
          class="category-button bordered fam-nip content invisible"
          classList={{ "anime-enter": isVisible(), "anime-exit": props.isOut }}
          style={{ "--index": props.index }}
        >
          {props.name}
        </p>
      </Sink>
    </SCCategory>
  );
}
