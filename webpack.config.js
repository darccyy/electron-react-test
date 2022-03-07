const webpack = require("webpack");

module.exports = {
  entry: {
    app: ["webpack/hot/dev-server", "./js/entry.js"],
  },
  output: {
    path: "/public/built",
    filename: "bundle.js",
    publicPath: "http://localhost:8080/built/",
  },
  devServer: {
    contentBase: "/public",
    publicPath: "http://localhost:8080/built/",
  },
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        query: { presets: ["react"] },
      },
      { test: /\.css$/, loader: "style-loader!css-loader" },
    ],
  },
  plugins: [newwebpack.HotModuleReplacementPlugin()],
};
