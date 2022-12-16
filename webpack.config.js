const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");

const BUILD_DIR = path.join(__dirname, "dist");
const APP_DIR = path.join(__dirname, "src");

const VENDOR_LIBS = ["react", "react-dom", "react-router-dom"];

const config = {
  entry: {
    bundle: APP_DIR + "/app.js",
    vendor: VENDOR_LIBS,
  },
  output: {
    filename: "[name].[chunkhash].js",
    path: BUILD_DIR,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        include: APP_DIR,
        loader: "babel-loader",
        options: {
          babelrc: false,
          presets: ["@babel/preset-env", "@babel/preset-react"],
          plugins: ["@babel/plugin-syntax-dynamic-import"],
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        use: "file-loader",
      },
    ],
  },
  plugins: [
    new htmlWebpackPlugin({ template: "index.html" }),
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV),
    }),
  ],
  devServer: {
    client: { overlay: { errors: true, warnings: false } },
    static: [
      {
        directory: BUILD_DIR,
      },
    ],
    compress: true,
    port: 3000,
    open: true,
    historyApiFallback: true,
  },
  optimization: {
    runtimeChunk: "single",
  },
};

module.exports = config;
