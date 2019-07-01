import express from 'express';
import React from 'react';
import {renderToString} from 'react-dom/server';
import { StaticRouter } from "react-router-dom";
import Signup from "../src/pages/Signup";
import Html from "./Html";

const app = express();
const port = 3002;

// const App = require("../client/src");
app.use(express.static('./build/static'));

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
    <StaticRouter location={req.originalUrl} context={context}>
      <Signup/>
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
        </head>
        <body>
        <div id="root">${html}</div>
        <script>
        </script>
    
        <script src="/js/2.5ff27bb7.chunk.js" defer></script>
        <script src="/js/main.ce38c026.chunk.js" defer></script>
        </body>
      </html>
   ` );
  }
});

app.listen(port, () => {
  console.log('Express server has started on port:  http://localhost:3002');
});
