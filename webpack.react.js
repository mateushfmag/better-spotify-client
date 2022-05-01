const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/renderer.tsx",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "renderer.js",
    asyncChunks: true,
  },
  devtool: "inline-source-map",
  devServer: {
    historyApiFallback: true,
    static: {
      directory: path.join(__dirname, "dist"),
    },
    host: "localhost",
    compress: true,
    port: 9000,
  },
  resolve: {
    alias: {
      ["@"]: path.resolve(__dirname, "src"),
    },
    extensions: [".tsx", ".ts", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: [{ loader: "ts-loader" }],
      },
      {
        test: /\.s[ac]ss$/i,
        exclude: /node_modules/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      filename: "index.html",
      inject: true,
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
};
