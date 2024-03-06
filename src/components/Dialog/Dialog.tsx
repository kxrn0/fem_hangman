import { JSX, createEffect, createSignal, onCleanup, onMount } from "solid-js";
import SCDialog from "./Dialog.styled.tsx";

type Props = {
  isOpen: boolean;
  set_is_open?: (isOpen: boolean) => void;
  children: JSX.Element;
};

export default function Dialog(props: Props) {
  const [isMounted, setIsMounted] = createSignal(false);

  function handle_click() {
    props.set_is_open?.(false);
  }

  function handle_escape(event: KeyboardEvent) {
    if (event.key === "Escape") props.set_is_open?.(false);
  }

  onMount(() => window.addEventListener("keydown", handle_escape));

  onCleanup(() => window.removeEventListener("keydown", handle_escape));

  createEffect(() => {
    console.log(props.isOpen);
    if (props.isOpen) setIsMounted(true);
  });

  return (
    <SCDialog classList={{ open: props.isOpen }}>
      <div
        class="backdrop"
        classList={{ open: props.isOpen }}
        onClick={handle_click}
      ></div>
      <div
        class="content"
        classList={{ open: props.isOpen, mounted: isMounted() }}
      >
        {props.children}
      </div>
    </SCDialog>
  );
}
