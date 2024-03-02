import SCApp from "./App.styled";

import bgDesktop from "./assets/images/background-desktop.svg";
import bgTablet from "./assets/images/background-tablet.svg";
import bgMobile from "./assets/images/background-mobile.svg";
import {
  JSX,
  Show,
  createEffect,
  createSignal,
  onCleanup,
  onMount,
} from "solid-js";
import { pages } from "./types";
import { PageContextProvider } from "./context/Page";

type Props = {
  children?: JSX.Element;
};

function get_visibility(
  element: HTMLElement,
  set_isVisible: (isVisible: boolean) => void,
  threshold: number,
  toggle: boolean
) {
  const observer = new IntersectionObserver(
    (entries) => {
      const target = entries[0];

      console.log({ isIntersecting: target.isIntersecting });

      if (target.isIntersecting) set_isVisible(true);
      else if (!target.isIntersecting && toggle) set_isVisible(false);
    },
    { threshold }
  );

  observer.observe(element);

  return observer;
}

function Fun() {
  const [isVisible, setIsVisible] = createSignal(false);
  const [observer, setObserver] = createSignal<IntersectionObserver>();

  function init_observer(element: HTMLElement) {
    const observer = get_visibility(element, setIsVisible, 1, true);

    setObserver(observer);
  }

  onCleanup(() => {
    observer()?.disconnect();
  });

  return (
    <div ref={init_observer} class="sxaron">
      <div class="content" classList={{ "anime-enter": isVisible() }}>
        Sxaron!
      </div>
    </div>
  );
}

function App(props: Props) {
  return (
    <PageContextProvider>
      <SCApp>
        <picture class="background">
          <source srcset={bgDesktop} media="(min-width: 1000px)" />
          <source srcset={bgTablet} media="(min-width: 700px)" />
          <img
            src={bgMobile}
            alt="background image of a starry sky and mountains in the distance"
          />
        </picture>
        {props.children}
        <div class="byme"></div>
        <Fun />
        <div class="byme"></div>
      </SCApp>
    </PageContextProvider>
  );
}

export default App;
