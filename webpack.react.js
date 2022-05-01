const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/renderer.tsx",
  target: "electron-renderer",
  devtool: "source-map",
  devServer: {
    static: {
      directory: path.join(__dirname, "dist/renderer.js"),
    },
    hot: true,
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
        include: /src/,
        use: [{ loader: "ts-loader" }],
      },
      {
        test: /\.s[ac]ss$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
  output: {
    path: __dirname + "/dist",
    filename: "renderer.js",
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      inject: true,
    }),
  ],
};
