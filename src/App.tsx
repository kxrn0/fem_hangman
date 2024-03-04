import SCApp from "./App.styled";

import bgDesktop from "./assets/images/background-desktop.svg";
import bgTablet from "./assets/images/background-tablet.svg";
import bgMobile from "./assets/images/background-mobile.svg";
import { JSX } from "solid-js";
import { PageContextProvider } from "./context/Page";
import { useMatch } from "@solidjs/router";
import { pages } from "./types";

type Props = {
  children?: JSX.Element;
};

function App(props: Props) {
  const matches = useMatch(() => pages.start.href);

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
        <div class="gradient" classList={{ active: !matches() }}></div>
        {props.children}
      </SCApp>
    </PageContextProvider>
  );
}

export default App;
