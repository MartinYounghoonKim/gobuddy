const webpack = require('webpack');
const path = require('path');

module.exports = {
  target: 'node',
  entry: './server/index.js',
  output: {
    filename: 'server.js',
    // path needs to be an ABSOLUTE file path
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/',
  },
  // Enable sourcemaps for debugging webpack's output.
  resolve: {
    // Add '.ts' and '.tsx' as resolvable extensions.
    extensions: [".ts", ".tsx", ".js", ".json"],
  },
  module: {
    rules: [
      // All files with a '.ts' or '.tsx' extension will be handled by 'ts-loader'.
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: 'ts-loader',
          }
        ]
      },
    ]
  },
  node: {
    fs: 'empty',
    net: 'empty',
  }
};
