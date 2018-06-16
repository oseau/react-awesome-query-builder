var webpack = require("webpack");
var path = require("path");

module.exports = {
  devServer: {
    host: "0.0.0.0",
    port: "8080",
    disableHostCheck: true
  },
  devtool: "source-map",
  entry: "./index",
  output: {
    path: __dirname,
    filename: "bundle.js"
  },
  resolveLoader: {
    modulesDirectories: ["node_modules"]
  },
  resolve: {
    extensions: ["", ".js"]
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ["react-hot-loader", "babel-loader"],
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        loader: "style!css"
      },
      {
        test: /\.scss$/,
        loader: "style!css!sass"
      },
      {
        test: /\.less$/,
        loader: "style!css!less"
      },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: "url-loader?limit=10000&minetype=application/font-woff"
      },
      {
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: "file-loader"
      }
    ]
  },
  plugins: [
    new webpack.NormalModuleReplacementPlugin(
      /^react-awesome-query-builder/,
      function(data) {
        const suffix = data.request.substring(
          "react-awesome-query-builder".length
        );
        data.request = path.resolve(__dirname, "../modules/" + suffix);
      }
    )
  ]
};
