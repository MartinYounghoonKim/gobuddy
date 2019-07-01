import express from 'express';
import React from 'react';
import {renderToString} from 'react-dom/server';
import { StaticRouter } from "react-router-dom";
import App from "../src/App";

const app = express();
const port = 3002;

app.use(express.static('./build'));

app.get('*', function (req, res, next) {
  let preloadState = {
    text: 'Server-Side Rendering'
  };
  //
  const renderProps = {
    preloadState: `window.__PRELOADED_STATE__ =${JSON.stringify(preloadState).replace(/</g, '\\u003c')}`,
    script: '/build/client.bundle.js'
  };
  const context = {};
  const html = renderToString(
    <StaticRouter location={req.path} context={context}>
      <App/>
    </StaticRouter>
  );
  if (context.url) {
    res.writeHead(302, {
      Location: context.url
    });
    res.send();
  } else {
    res.send(`
      <!DOCTYPE html>
        <head>
          <title>Universal React</title>
          <link rel="stylesheet" href="/css/main.css">
          <link rel="manifest" href="/manifest.json"/>
        </head>
        <body>
          <div id="root">${html}</div>
          <script src="/static/js/2.6db87ee7.chunk.js"></script>
          <script src="/static/js/main.fe4703fe.chunk.js"></script>
        </body>
      </html>
   ` );
  }
});

app.listen(port, () => {
  console.log('Express server has started on port:  http://localhost:3002');
});
