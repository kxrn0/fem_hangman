/* @refresh reload */
import { render } from "solid-js/web";

import "reset-css";
import "./index.css";
import App from "./App";
import { Route, Router } from "@solidjs/router";
import { pages } from "./types";
import Start from "./pages/Start/Start";
import Instructions from "./pages/Instructions/Instructions";
import Categories from "./pages/Categories/Categories";
import Game from "./pages/Game/Game";

const root = document.getElementById("root");

render(
  () => (
    <Router root={App}>
      <Route path={pages.start.href} component={Start} />
      <Route path={pages.instructions.href} component={Instructions} />
      <Route path={pages.categories.href} component={Categories} />
      <Route path={pages.game.href} component={Game} />
      <Route path={"*"} component={() => <p>404</p>} />
    </Router>
  ),
  root!
);
