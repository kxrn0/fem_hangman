import { usePageContext } from "../../../context/Page.tsx";
import { pages } from "../../../types.ts";
import SCPoint from "./Point.styled.tsx";

type Props = {
  title: string;
  subtitle: string;
  description: string;
};

export default function Point(props: Props) {
  const [page] = usePageContext();
  const currentPage = pages.instructions;

  return (
    <SCPoint>
      <div
        class="content anime-enter"
        classList={{ "anime-exit": page().name !== currentPage.name }}
      >
        <p class="fs-l">{props.title}</p>
        <p class="fs-m">{props.subtitle}</p>
        <p class="fs-body">{props.description}</p>
      </div>
    </SCPoint>
  );
}
