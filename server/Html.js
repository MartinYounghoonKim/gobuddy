const React = require('react');

const Html = ({ html }) => (`
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
        <script src="/js/main.c053551b.chunk.js" defer></script>
      </body>
    </html>
`);

export default Html;
