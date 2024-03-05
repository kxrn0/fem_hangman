import { Accessor, createSignal, onMount } from "solid-js";
import SCGame from "./Game.styled.tsx";
import { SetStoreFunction, createStore } from "solid-js/store";
import { useSearchParams } from "@solidjs/router";
import categories from "../../category_data.ts";
import { Category } from "../../types.ts";
import random from "../../utilities/random.ts";

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

export default function Game(props: Props) {
  const [word, setWord] = createStore({ string: "", letters: [] });
  const [keys, setKeys] = createStore([]);
  const [lives, setLives] = createSignal(8);
  const [params] = useSearchParams();

  function init() {
    const categoryKey = (params.category as Category) || "countries";
    const size = categories[categoryKey].length;
    const max = 1e3;
    const keys = [];
    let count: number, word: string, letters: string[];

    count = 0;
    word = "";
    while (count++ < max) {
      word = categories[categoryKey][~~random(0, size)];

      if (!props.seen.some((str) => word === str)) break;
    }

    letters = word.split("").map((char) => ({ char, guessed: false }));
  }

  onMount(() => {
    init();
  });

  return (
    <SCGame>
      <nav class="navbar"></nav>
      <div class="letters"></div>
      <div class="keyboard"></div>
    </SCGame>
  );
}
