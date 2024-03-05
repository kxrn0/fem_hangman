import Start from "./pages/Start/Start";
import Instructions from "./pages/Instructions/Instructions";
import Categories from "./pages/Categories/Categories";
import Game from "./pages/Game/Game";
import { pages } from "./types";
import { Router, Route, RouteSectionProps } from "@solidjs/router";
import { createStore } from "solid-js/store";
import { Component } from "solid-js";

type Props = {
  root: Component<RouteSectionProps<unknown>>;
};

export default function App(props: Props) {
  const [seen, setSeen] = createStore<string[]>([]);

  return (
    <Router root={props.root}>
      <Route path={pages.start.href} component={Start} />
      <Route path={pages.instructions.href} component={Instructions} />
      <Route path={pages.categories.href} component={Categories} />
      <Route
        path={pages.game.href}
        component={() => <Game seen={seen} set_seen={setSeen} />}
      />
      <Route path={"*"} component={() => <p>404</p>} />
    </Router>
  );
}
