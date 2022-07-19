import { Switch } from "react-router-dom";
import Route from "./Route";

import { Dashboard } from "../pages/Dashboard";
import { SignIn } from "../pages/SignIn";
import { SignUp } from "../pages/SignUp";

export const Routes = () => (
  <Switch>
    <Route path="/" exact component={SignIn} />
    <Route path="/sign-in" component={SignIn} />
    <Route path="/sign-up" component={SignUp} />
    <Route path="/dashboard" component={Dashboard} isPrivate />
  </Switch>
);
