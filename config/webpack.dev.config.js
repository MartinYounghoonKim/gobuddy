const webpack = require('webpack');
const path = require('path');
const merge = require('webpack-merge');
const baseWebpackConfigFactory = require("./webpack.config");
const baseWebpackConfig = baseWebpackConfigFactory('development');
const isDevMode = true;
const settings = {
  distPath: path.join(__dirname, "dist"),
  srcPath: path.join(__dirname, "src")
};

function srcPathExtend(subpath) {
  return path.join(settings.srcPath, subpath)
}

const webpackConfig = {
  target: 'node',
  entry: './server/index.js',
  output: {
    filename: 'server.js',
    // path needs to be an ABSOLUTE file path
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/',
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: ["babel-loader", "ts-loader"]
      },
      {
        test: /\.scss$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              sourceMap: isDevMode
            }
          },
          {
            loader: "postcss-loader",
            options: {
              plugins: [
                require("autoprefixer")()
              ],
              sourceMap: isDevMode
            }
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: isDevMode
            }
          }
        ]
      },
      {
        test: /\.(ttf|eot|woff|woff2)$/,
        use: {
          loader: "file-loader",
          options: {
            name: "fonts/[name].[ext]",
          },
        },
      },
      {
        test: /\.(jpe?g|png|gif|svg|ico)$/i,
        use: [
          {
            loader: "file-loader",
            options: {
              outputPath: "assets/"
            }
          }
        ]
      }
    ]
  },
  node: {
    fs: 'empty',
    net: 'empty',
  }
};

module.exports = webpackConfig;
