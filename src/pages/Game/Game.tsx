import { For, createSignal, onMount } from "solid-js";
import SCGame from "./Game.styled.tsx";
import { SetStoreFunction, createStore } from "solid-js/store";
import { useSearchParams } from "@solidjs/router";
import categories from "../../category_data.ts";
import { Category, pages } from "../../types.ts";
import random from "../../utilities/random.ts";
import mix from "../../utilities/mix.ts";
import random_nip from "../../utilities/random_nip.ts";
import Dialog from "../../components/Dialog/Dialog.tsx";
import iconMenu from "../../assets/images/icon-menu.svg";
import iconHeart from "../../assets/images/icon-heart.svg";
import Card from "./Card/Card.tsx";
import Sink from "../../components/Sink/Sink.tsx";
import { usePageContext } from "../../context/Page.tsx";

type Letter = {
  char: string;
  guessed: boolean;
};

type Key = {
  char: string;
  clicked: boolean;
};

type Props = {
  seen: string[];
  set_seen: SetStoreFunction<string[]>;
};

type GameState = "playing" | "loading" | "paused" | "win" | "lose";

export default function Game(props: Props) {
  const [target, setTarget] = createStore({
    word: "",
    letters: [] as Letter[],
  });
  const [keys, setKeys] = createStore<Key[]>([]);
  const [lives, setLives] = createSignal(8);
  const health = () => ((100 * lives()) / 8).toFixed(2);
  const [gameState, setGameState] = createSignal<GameState>("playing");
  const [page, setPage, delay] = usePageContext();
  const actualDelay = delay * 2;
  const [params] = useSearchParams();

  function init() {
    const categoryKey = (params.category as Category) || "countries";
    const size = categories[categoryKey].length;
    const max = 1e3;
    let count: number, word: string, letters: Letter[], keys: Key[];

    count = 0;
    word = "";
    while (count++ < max) {
      word = categories[categoryKey][~~random(0, size)];

      if (!props.seen.some((str) => word === str)) break;
    }

    letters = word.split("").map((char) => ({ char, guessed: false }));
    keys = mix(word, 30, random_nip).map((char) => ({ char, clicked: false }));

    setTarget({ word, letters });
    setKeys(keys);
  }

  function select_key(char: string) {
    if (gameState() !== "playing") return;

    setKeys((key) => key.char === char, "clicked", true);

    if (target.letters.some((letter) => letter.char === char)) {
      setTarget("letters", (letter) => letter.char === char, "guessed", true);

      if (target.letters.every((letter) => letter.guessed)) setGameState("win");
    } else {
      setLives((prev) => prev - 1);

      if (lives() <= 0) setGameState("lose");
    }
  }

  onMount(() => {
    init();
  });

  return (
    <SCGame>
      <p style={`color: azure; position: fixed; top: 10px; right: 10px;`}>
        {target.word}
      </p>
      <nav class="navbar">
        <div class="left">
          <button
            class="nav-button"
            aria-label="open menu"
            onClick={() => setGameState("paused")}
          >
            <img src={iconMenu} alt="menu icon" />
            <div class="screen"></div>
            <div class="borders"></div>
          </button>
          <p class="fam-mouse fs-l">{params.category || "countries"}</p>
        </div>
        <div class="right" title={`${lives()}`}>
          <div
            class="bar"
            aria-label={`health: ${health()}%`}
            style={{ "--health": `${health()}%` }}
          ></div>
          <img src={iconHeart} alt="health" class="heart" />
        </div>
      </nav>
      <div class="letters">
        <For each={target.letters}>
          {(letter) => (
            <p class="bordered letter" classList={{ guessed: letter.guessed }}>
              {letter.guessed ? letter.char : ""}
            </p>
          )}
        </For>
      </div>
      <div class="keyboard">
        <For each={keys}>
          {(key) => (
            <button
              class="keyboard-letter"
              disabled={key.clicked}
              onClick={[select_key, key.char]}
            >
              {key.char}
            </button>
          )}
        </For>
      </div>
      <Dialog
        isOpen={gameState() === "paused"}
        set_is_open={() => setGameState("playing")}
      >
        <Card title="Paused">
          <div class="menu-items">
            <button
              class="button-one fam-mouse fs-s bordered"
              onClick={() => setGameState("playing")}
            >
              CONTINUE
            </button>
            <Sink
              page={pages.categories}
              delay={actualDelay}
              set_page={setPage}
            >
              <p class="button-one fam-mouse fs-s bordered">NEW CATEGORY</p>
            </Sink>
            <Sink page={pages.start} delay={actualDelay} set_page={setPage}>
              <p class="button-two fam-mouse fs-s bordered">QUIT GAME</p>
            </Sink>
          </div>
        </Card>
      </Dialog>
      <Dialog isOpen={gameState() === "win" || gameState() === "lose"}>
        <p>you {gameState()}</p>
      </Dialog>
    </SCGame>
  );
}
