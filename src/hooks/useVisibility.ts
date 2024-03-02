import { JSX, createSignal, onMount } from "solid-js";

export default function useVisibility(
  elements: JSX.Element[],
  threshold = 1,
  toggle = false
) {
  const [isVisible, setIsVisible] = createSignal(false);
  let ref;

  // onMount(() => );

  return [ref, isVisible];
}
