import { JSX, createSignal } from "solid-js";
import SCSink from "./Sink.styled.tsx";
import { Page } from "../../types.ts";
import { useNavigate } from "@solidjs/router";

type Props = {
  children: JSX.Element;
  page: Page;
  delay: number;
  set_page: (page: Page) => void;
};

export default function Sink(props: Props) {
  const [isDisabled, setIsDisabled] = createSignal(false);
  const navigate = useNavigate();

  function handle_click(event: MouseEvent) {
    event.preventDefault();

    if (isDisabled()) return;

    setIsDisabled(true);
    props.set_page(props.page);

    setTimeout(() => navigate(props.page.href), props.delay * 1000);
  }

  return <SCSink href={props.page.href} onClick={handle_click}></SCSink>;
}
