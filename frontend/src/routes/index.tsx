import { Switch } from "react-router-dom";
import Route from "./Route";

import { Games } from "../pages/Games";
import { CreateGame } from "../pages/Games/Create";
import { SignIn } from "../pages/SignIn";
import { SignUp } from "../pages/SignUp";

export const Routes = () => (
  <Switch>
    <Route path="/" exact component={SignIn} />
    <Route path="/sign-in" component={SignIn} />
    <Route path="/sign-up" component={SignUp} />
    <Route path="/games" exact component={Games} isPrivate />
    <Route path="/games/create" component={CreateGame} isPrivate />
    <Route path="/games/:id" component={CreateGame} isPrivate />
  </Switch>
);
