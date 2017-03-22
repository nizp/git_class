const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const html = new HtmlWebpackPlugin({
  filename: '../index.html',
  template: 'index.html',
  title:'my app'
})
module.exports = {
  entry:{
    app:"./src/app.js",
    ppa:"./src/ppa.js"
  },
  output:{
    path: path.resolve(__dirname, 'build/src'),
    filename:"[name].js"
  },
  module:{
    rules:[{
        test: /\.js$/,
        use:'babel-loader'
      },
      {
       test: /\.css$/,
       use: ExtractTextPlugin.extract({
         fallback: "style-loader",
         use: "css-loader"
       })
     }
      // {
      //  test: /\.css$/,
      //  use: [ 'style-loader', 'css-loader' ]
      // }
    ]
  },
  plugins: [
    html,
  new ExtractTextPlugin("1.css")
  ]
}