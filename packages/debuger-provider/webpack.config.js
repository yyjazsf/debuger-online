const path = require("path");

const dev = process.env.NODE_ENV === "development";

module.exports = {
  entry: "./src/index.ts",
  devtool: "inline-source-map",
  mode: dev ? "development" : "production",
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: [
          {
            loader: "cache-loader",
          },
          {
            loader: "babel-loader",
          },
          {
            loader: "ts-loader",
            options: {
              transpileOnly: true,
              happyPackMode: false,
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, "dist"),
  },
};
