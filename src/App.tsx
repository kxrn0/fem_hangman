import SCApp from "./App.styled";

import bgDesktop from "./assets/images/background-desktop.svg";
import bgTablet from "./assets/images/background-tablet.svg";
import bgMobile from "./assets/images/background-mobile.svg";
import { JSX } from "solid-js";

type Props = {
  children?: JSX.Element;
};

function App(props: Props) {
  return (
    <SCApp>
      <picture class="background">
        <source srcset={bgDesktop} media="(min-width: 1000px)" />
        <source srcset={bgTablet} media="(min-width: 700px)" />
        <img
          src={bgMobile}
          alt="background image of a starry sky ang mountains in the distance"
        />
      </picture>
      {props.children}
    </SCApp>
  );
}

export default App;
