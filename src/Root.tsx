import bgDesktop from "./assets/images/background-desktop.svg";
import bgTablet from "./assets/images/background-tablet.svg";
import bgMobile from "./assets/images/background-mobile.svg";
import { pages } from "./types";
import { JSX } from "solid-js";
import { useMatch } from "@solidjs/router";
import { PageContextProvider } from "./context/Page";
import SCRoot from "./Root.styled";

type Props = {
  children?: JSX.Element;
};

export default function Root(props: Props) {
  const matches = useMatch(() => pages.start.href);

  return (
    <PageContextProvider>
      <SCRoot>
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
      </SCRoot>
    </PageContextProvider>
  );
}
