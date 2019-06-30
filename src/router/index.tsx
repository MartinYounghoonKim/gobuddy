import * as React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";

import Signup from "../pages/Signup";
import Home from "../pages/Home";

export default (
  <>
    <BrowserRouter>
      <Switch>
        <Route exact={true} path="/home" component={Home}/>
        <Route exact={true} path="/signup" component={Signup}/>
      </Switch>
    </BrowserRouter>
  </>
);
