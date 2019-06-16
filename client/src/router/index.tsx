import * as React from "react";
import { Redirect, Route, Switch, BrowserRouter } from "react-router-dom";

const Signup = React.lazy(() => import("../pages/Signup"));

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
