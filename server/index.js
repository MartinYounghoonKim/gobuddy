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
  // let renderProps = {
  //   preloadState: `window.__PRELOADED_STATE__ =${JSON.stringify(preloadState).replace(/</g, '\\u003c')}`,
  //   script: '/build/client.bundle.js'
  // };
  //
  ReactDomServer.renderToNodeStream(
    <Html>
    <App />
    </Html>
  ).pipe(res);
});

app.listen(port, () => {
  // const host = app.address().address;
  // const port = app.address().port;
  console.log('Express server has started on port:  http://localhost:3000')
});
