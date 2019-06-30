import * as React from "react";
import { Link, Switch, Route } from "react-router-dom";
import Home from "./components/Signup/Signup";

export default class Layout extends React.Component {
  render() {
    return (
      <div>
        <div>
          <Link to="/signup">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>
        <Switch>
          <Route path="/signup" exact component={ Home } />
        </Switch>
      </div>
    );
  }
}
