/**
 * @description ENV에 대한 환경을 셋팅
 */
process.env.BABEL_ENV = 'development';
process.env.NODE_ENV = 'development';

const rm = require('rimraf');
const path = require('path');
const webpack = require('webpack');
const webpackConfig = require('../config/webpack.dev.config');

rm(path.resolve(__dirname, '../dist'), err => {
  if (err) {
    throw err;
  }
  webpack(webpackConfig, (err, stats) => {
    if (err) {
      throw err;
    }
    process.stdout.write(stats.toString({
      colors: true,
      modules: false,
      children: true,
      chunks: false,
      chunkModules: false
    }) + '\n\n');

    if (stats.hasErrors()) {
      process.exit(1)
    }
    console.log("completed");
  });
});
