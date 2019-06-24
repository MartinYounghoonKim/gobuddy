import express from 'express';
import React from 'react';
import ReactDomServer from 'react-dom/server';
import { StaticRouter, Route, Switch, NavLink } from "react-router-dom";
import Html from "./Html";
// import Signup from "../client/src/pages/Signup.tsx";
import App from "../client/src/index";

const app = express();
const port = 3000;

// const App = require("../client/src");

app.get('/*', function (req, res, next) {
  let preloadState = {
    text: 'Server-Side Rendering'
  };
  //
  const renderProps = {
    preloadState: `window.__PRELOADED_STATE__ =${JSON.stringify(preloadState).replace(/</g, '\\u003c')}`,
    script: '/build/client.bundle.js'
  };
  const context = {};
  const html = ReactDomServer.renderToString(App);
  if (context.url) {
    res.writeHead(302, {
      Location: context.url
    });
    res.send();
  } else {
    res.write(html);
    res.send();
  }
});

app.listen(port, () => {
  console.log('Express server has started on port:  http://localhost:3000')
});
