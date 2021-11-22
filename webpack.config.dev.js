const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js",
    publicPath: "/",
  },
  mode: "development",
  devtool: "source-map",
  devServer: {
    historyApiFallback: true,
    compress: true,
    open: true,
    port: "9000"
  },
  resolve: {
    extensions: [".js", ".jsx"]
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_module/,
        use: "babel-loader"
      },
      {
        test: /\.css$/,
        use: [
          "style-loader",
          "css-loader",
        ]
      },
      {
        test: /\.html$/,
        use: "html-loader"
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif|webp)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'images/[name][ext][query]',
        },
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: "body",
      favicon: path.resolve(__dirname, "./public/favicon.ico"),
      template: path.resolve(__dirname, "./public/index.html"),
      title: "Country App",
      filename: "index.html"
    })
  ]
}