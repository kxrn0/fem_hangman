import { createIntersectionObserver } from "@solid-primitives/intersection-observer";
import { usePageContext } from "../../../context/Page.tsx";
import { pages } from "../../../types.ts";
import SCPoint from "./Point.styled.tsx";
import { createSignal } from "solid-js";

type Props = {
  title: string;
  subtitle: string;
  description: string;
};

export default function Point(props: Props) {
  const [page] = usePageContext();
  const [isVisible, setIsVisible] = createSignal(false);
  const [targets, setTargets] = createSignal<Element[]>([]);
  const currentPage = pages.instructions;

  createIntersectionObserver(
    targets,
    (entries) => {
      const target = entries[0];

      if (target.isIntersecting) setIsVisible(true);
    },
    { threshold: 0.5 }
  );

  return (
    <SCPoint ref={(element) => setTargets([element])}>
      <div
        class="content invisible"
        classList={{
          "anime-enter": isVisible(),
          "anime-exit": page().name !== currentPage.name,
        }}
      >
        <p class="fs-l">{props.title}</p>
        <p class="fs-m">{props.subtitle}</p>
        <p class="fs-body">{props.description}</p>
      </div>
    </SCPoint>
  );
}
