const express = require('express');

const app = express();
const port = 3000;
const ReactDomServer = require('react-dom/server');
const Html = require("./Html");
const App = require("../client/src");

app.get('/', function (req, res, next) {
  let preloadState = {
    text: 'Server-Side Rendering'
  };

  let renderProps = {
    preloadState: `window.__PRELOADED_STATE__ =${JSON.stringify(preloadState).replace(/</g, '\\u003c')}`,
    script: '/build/client.bundle.js'
  };

  ReactDomServer.renderToNodeStream(
    <Html {...renderProps}>
      <App data={preloadState}/>
    </Html>
  ).pipe(res);
  // res.send('<h1>Hello React Server-Side Rendering</h1>');
});

app.listen(port, () => {
  // const host = app.address().address;
  // const port = app.address().port;
  console.log('Express server has started on port:  http://localhost:3000')
});
