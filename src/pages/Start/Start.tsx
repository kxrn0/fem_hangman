import logo from "../../assets/images/logo.svg";
import iconPlay from "../../assets/images/icon-play.svg";
import Sink from "../../components/Sink/Sink.tsx";
import { usePageContext } from "../../context/Page.tsx";
import { pages } from "../../types.ts";
import SCStart from "./Start.styled.tsx";
import { onMount } from "solid-js";

export default function Start() {
  const [page, setPage, delay] = usePageContext();
  const isCurrent = () => pages.start.name === page().name;
  const actualDelay = delay * 2;

  onMount(() => {
    //reset the history
  });

  return (
    <SCStart class="sxarp">
      <div
        class="container"
        classList={{ "anime-enter": isCurrent(), "anime-exit": !isCurrent() }}
      >
        <img src={logo} alt="company logo" class="logo" />
        <Sink page={pages.categories} delay={actualDelay} set_page={setPage}>
          <div class="play-button" aria-label="categories">
            <img src={iconPlay} alt="play button" />
            <div class="screen"></div>
            <div class="borders"></div>
          </div>
        </Sink>
        <Sink page={pages.instructions} delay={actualDelay} set_page={setPage}>
          <p class="button-one bordered fam-mouse fs-s">HOW TO PLAY</p>
        </Sink>
      </div>
    </SCStart>
  );
}
