import { useMatch } from "@solidjs/router";
import { pages, usePageContext } from "../context/Page";
import { createEffect } from "solid-js";

export default function SetPage() {
  const [, pageObj, transObj] = usePageContext();

  const start = useMatch(() => pages.start.href);
  const inst = useMatch(() => pages.instructions.href);
  const cats = useMatch(() => pages.categories.href);
  const game = useMatch(() => pages.game.href);

  createEffect(() => {
    if (transObj.isTrans()) return;

    if (start() && !(pageObj.page().name === pages.start.name))
      pageObj.set_page(pages.start);
    if (inst() && !(pageObj.page().name === pages.instructions.name))
      pageObj.set_page(pages.instructions);
    if (cats() && !(pageObj.page().name === pages.categories.name))
      pageObj.set_page(pages.categories);
    if (game() && !(pageObj.page().name === pages.game.name))
      pageObj.set_page(pages.game);
  });

  return null;
}
