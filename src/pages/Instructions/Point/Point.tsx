import { createSignal, onCleanup } from "solid-js";
import SCPoint from "./Point.styled.tsx";
import get_observer from "../../../utilities/get_observer.ts";

type Props = {
  title: string;
  subtitle: string;
  description: string;
  isOut: boolean;
};

export default function Point(props: Props) {
  const [isVisible, setIsVisible] = createSignal(false);
  const [observer, setObserver] = createSignal<IntersectionObserver>();

  function set_observer(element: HTMLElement) {
    const observer = get_observer(element, setIsVisible, .5, false);

    setObserver(observer);
  }

  onCleanup(() => observer()?.disconnect());

  return (
    <SCPoint ref={set_observer}>
      <div
        class="content invisible"
        classList={{ "anime-enter": isVisible(), "anime-exit": props.isOut }}
      >
        <p class="fs-l">{props.title}</p>
        <p class="fs-m">{props.subtitle}</p>
        <p class="fs-body">{props.description}</p>
      </div>
    </SCPoint>
  );
}
