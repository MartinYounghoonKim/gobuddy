import * as React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";

import Signup from "../pages/Signup";
// const Signup = React.lazy(() => import("../pages/Signup"));

export default (
  <>
    <React.Suspense fallback={<div/>}>
      <BrowserRouter>
        <Switch>
          <Route exact={true} path="/signup" component={Signup}/>
        </Switch>
      </BrowserRouter>
    </React.Suspense>
  </>
);
