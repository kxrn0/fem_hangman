import { Router, Route, RouteSectionProps } from "@solidjs/router";
import { createStore } from "solid-js/store";
import { Component } from "solid-js";
import { pages } from "./context/Page";
import Start from "./pages/Start/Start";
import Instructions from "./pages/Instructions/Instructions";
import Categories from "./pages/Categories/Categories";
import Game from "./pages/Game/Game";

type Props = {
  root: Component<RouteSectionProps<unknown>>;
};

export default function App(props: Props) {
  const [seen, setSeen] = createStore<string[]>([]);

  return (
    <Router root={props.root}>
      <Route path={pages.instructions.href} component={Instructions} />
      <Route path={pages.categories.href} component={Categories} />
      <Route
        path={pages.game.href}
        component={() => <Game seen={seen} set_seen={setSeen} />}
      />
      <Route path={"*"} component={Start} />
    </Router>
  );
}
