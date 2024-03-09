import { useMatch } from "@solidjs/router";
import { pages, usePageContext } from "../context/Page";
import { createEffect } from "solid-js";

export default function SetPage() {
  const [page, setPage] = usePageContext();

  const start = useMatch(() => pages.start.href);
  const inst = useMatch(() => pages.instructions.href);
  const cats = useMatch(() => pages.categories.href);
  const game = useMatch(() => pages.game.href);

  createEffect(() => {
    if (start() && !(page().name === pages.start.name)) setPage(pages.start);
    if (inst() && !(page().name === pages.instructions.name))
      setPage(pages.instructions);
    if (cats() && !(page().name === pages.categories.name))
      setPage(pages.categories);
    if (game() && !(page().name === pages.game.name)) setPage(pages.game);
  });

  return null;
}
