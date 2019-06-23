import express from 'express';
import React from 'react';
import ReactDomServer from 'react-dom/server';
import Html from "./Html";
import App from "../client/src/App";

const app = express();
const port = 3000;

// const App = require("../client/src");

app.get('/', function (req, res, next) {
  // let preloadState = {
  //   text: 'Server-Side Rendering'
  // };
  //
  const renderProps = {
    preloadState: `window.__PRELOADED_STATE__ =${JSON.stringify(preloadState).replace(/</g, '\\u003c')}`,
    script: '/build/client.bundle.js'
  };
  //
  ReactDomServer.renderToNodeStream(
    <Html {...renderProps}>
      <App />
    </Html>
  ).pipe(res);
});

app.listen(port, () => {
  console.log('Express server has started on port:  http://localhost:3000')
});
