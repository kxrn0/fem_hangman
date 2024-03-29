import { For } from "solid-js";
import { usePageContext, pages } from "../../context/Page.tsx";
import iconBack from "../../assets/images/icon-back.svg";
import Sink from "../../components/Sink/Sink.tsx";
import Point from "./Point/Point.tsx";
import SCInstructions from "./Instructions.styled.tsx";

export default function Instructions() {
  const [, pageObj] = usePageContext();
  const isCurrent = () => pages.instructions.name === pageObj.page().name;
  const instructions = [
    {
      title: "01",
      subtitle: "Choose a category",
      description:
        "First, choose a word category, like animals or movies. The computer then randomly selects a secret word from that topic and shows you blanks for each letter of the word.",
    },
    {
      title: "02",
      subtitle: "Guess letters",
      description:
        "Take turns guessing letters. The computer fills in the relevant blank spaces if your guess is correct. If it’s wrong, you lose some health, which empties after eight incorrect guesses.",
    },
    {
      title: "03",
      subtitle: "Win or lose",
      description:
        "You win by guessing all the letters in the word before your health runs out. If the health bar empties before you guess the word, you lose.",
    },
  ];

  return (
    <SCInstructions>
      <div class="head anime-enter" classList={{ "anime-exit": !isCurrent() }}>
        <Sink page={pages.start}>
          <div class="nav-button">
            <img src={iconBack} alt="back" />
            <div class="screen"></div>
            <div class="borders"></div>
          </div>
        </Sink>
        <div class="gradient-text fam-mouse fs-xl">
          <p class="shadow" aria-hidden="true">
            How to Play
          </p>
          <p class="text">How to Play</p>
        </div>
      </div>
      <div class="instructions">
        <For each={instructions}>{(truck) => <Point {...truck} />}</For>
      </div>
    </SCInstructions>
  );
}
