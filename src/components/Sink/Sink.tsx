import { JSX, createSignal } from "solid-js";
import { useNavigate } from "@solidjs/router";
import { Page } from "../../types.ts";
import SCSink from "./Sink.styled.tsx";
import { usePageContext } from "../../context/Page.tsx";

type Props = {
  children: JSX.Element;
  page: Page;
};

export default function Sink(props: Props) {
  const [isDisabled, setIsDisabled] = createSignal(false);
  const [delay, pageObj, transObj] = usePageContext();
  const navigate = useNavigate();

  function handle_click(event: MouseEvent) {
    event.preventDefault();

    if (isDisabled()) return;

    setIsDisabled(true);
    transObj.set_is_trans(true);
    pageObj.set_page(props.page);

    setTimeout(() => {
      navigate(props.page.href);
      transObj.set_is_trans(false);
    }, delay * 2000);
  }

  return (
    <SCSink href={props.page.href} onClick={handle_click}>
      {props.children}
    </SCSink>
  );
}
