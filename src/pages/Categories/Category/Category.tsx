import { createSignal } from "solid-js";
import { createIntersectionObserver } from "@solid-primitives/intersection-observer";
import { usePageContext, pages } from "../../../context/Page.tsx";
import Sink from "../../../components/Sink/Sink.tsx";
import SCCategory from "./Category.styled.tsx";

type Props = {
  name: string;
  param: string;
  index: string;
};

export default function Category(props: Props) {
  const [isVisible, setIsVisible] = createSignal(false);
  const [targets, setTargets] = createSignal<Element[]>([]);
  const [, pageObj] = usePageContext();
  const nextPage = {
    ...pages.game,
    href: `${pages.game.href}?category=${props.param}`,
  };
  const currentPage = pages.categories;

  createIntersectionObserver(
    targets,
    (entries) => {
      const target = entries[0];

      if (target.isIntersecting) setIsVisible(true);
    },
    { threshold: 0.5 }
  );

  return (
    <SCCategory class="category" ref={(element) => setTargets([element])}>
      <Sink page={nextPage}>
        <p
          class="category-button bordered fam-nip content"
          classList={{
            "anime-enter": isVisible(),
            "anime-exit": pageObj.page().name !== currentPage.name,
          }}
          style={{ "--index": props.index }}
        >
          {props.name}
        </p>
      </Sink>
    </SCCategory>
  );
}
