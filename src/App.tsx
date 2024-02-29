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
          alt="background image of a starry sky and mountains in the distance"
        />
      </picture>
      <button class="bordered button-one fs-s fam-mouse">how to play</button>
      <a href="https://4chan.org" class="bordered button-one fs-s fam-mouse">
        four change
      </a>
      <button class="bordered button-one fs-s fam-nip">人類社会のすべ</button>
      <a href="https://4chan.org" class="bordered button-one fs-s fam-nip">
        人類社会のすべ
      </a>

      <button class="bordered button-two fs-s fam-mouse">how to play</button>
      <a href="https://4chan.org" class="bordered button-two fs-s fam-mouse">
        four change
      </a>
      <button class="bordered button-two fs-s fam-nip">人類社会のすべ</button>
      <a href="https://4chan.org" class="bordered button-two fs-s fam-nip">
        人類社会のすべ
      </a>

      <button class="keyboard-letter">A</button>
      <button class="keyboard-letter">員</button>

      <button disabled class="keyboard-letter">
        A
      </button>
      <button disabled class="keyboard-letter">
        員
      </button>

      <p class="bordered playable-letter"></p>
      <p class="bordered playable-letter guessed fam-mouse">E</p>
      <p class="bordered playable-letter guessed fam-nip">員</p>

      <a href="https://4chan.org/g">Social Media</a>
      {props.children}
    </SCApp>
  );
}

export default App;
