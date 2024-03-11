import { usePageContext, pages } from "../../context/Page.tsx";
import logo from "../../assets/images/logo.svg";
import iconPlay from "../../assets/images/icon-play.svg";
import Sink from "../../components/Sink/Sink.tsx";
import SCStart from "./Start.styled.tsx";
import { onMount } from "solid-js";

export default function Start() {
  const [, pageobj] = usePageContext();
  const isCurrent = () => pages.start.name === pageobj.page().name;

  onMount(() => {});

  return (
    <SCStart>
      <div
        class="container"
        classList={{ "anime-enter": isCurrent(), "anime-exit": !isCurrent() }}
      >
        <img src={logo} alt="company logo" class="logo" />
        <Sink page={pages.categories}>
          <div class="play-button" aria-label="categories">
            <img src={iconPlay} alt="play button" />
            <div class="screen"></div>
            <div class="borders"></div>
          </div>
        </Sink>
        <Sink page={pages.instructions}>
          <p class="button-one bordered fam-mouse fs-s">HOW TO PLAY</p>
        </Sink>
      </div>
    </SCStart>
  );
}
