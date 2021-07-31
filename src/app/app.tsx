import { BrowserRouter, Route, Switch } from "react-router-dom";

import ErrorPage from "pages/error";
import HomePage from "pages/home";
import LevelsPage from "pages/levels";
import PlayPage from "pages/play";

export const App = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/levels">
          <LevelsPage />
        </Route>
        <Route path="/play">
          <PlayPage />
        </Route>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route>
          <ErrorPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};
