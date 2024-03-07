import { JSX } from "solid-js";
import SCCard from "./Card.styled.tsx";

type Props = {
  title: string;
  children: JSX.Element;
};

export default function Card(props: Props) {
  return (
    <SCCard>
      <div class="title gradient-text fam-mouse">
        <p class="shadow" aria-hidden="true">
          {props.title}
        </p>
        <p class="text">{props.title}</p>
      </div>
      {props.children}
    </SCCard>
  );
}
