import { Switch } from "react-router-dom";
import Route from "./Route";

import { Games } from "../pages/Games";
import { CreateGame } from "../pages/Games/Create";
import { SignIn } from "../pages/SignIn";
import { SignUp } from "../pages/SignUp";
import { Platforms } from "../pages/Platforms";
import { CreatePlatform } from "../pages/Platforms/Create";
import { Categories } from "../pages/Categories";
import { CreateCategory } from "../pages/Categories/Create";
import { Developers } from "../pages/Developers";
import { CreateDeveloper } from "../pages/Developers/Create";

export const Routes = () => (
  <Switch>
    <Route path="/" exact component={SignIn} />
    <Route path="/sign-in" component={SignIn} />
    <Route path="/sign-up" component={SignUp} />

    <Route path="/games" exact component={Games} isPrivate />
    <Route path="/games/create" component={CreateGame} isPrivate />
    <Route path="/games/:id" component={CreateGame} isPrivate />

    <Route path="/platforms" exact component={Platforms} isPrivate />
    <Route path="/platforms/create" component={CreatePlatform} isPrivate />
    <Route path="/platforms/:id" component={CreatePlatform} isPrivate />

    <Route path="/categories" exact component={Categories} isPrivate />
    <Route path="/categories/create" component={CreateCategory} isPrivate />
    <Route path="/categories/:id" component={CreateCategory} isPrivate />

    <Route path="/developers" exact component={Developers} isPrivate />
    <Route path="/developers/create" component={CreateDeveloper} isPrivate />
    <Route path="/developers/:id" component={CreateDeveloper} isPrivate />
  </Switch>
);
