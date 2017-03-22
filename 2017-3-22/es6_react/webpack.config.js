const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const html = new HtmlWebpackPlugin({
  filename: '../1_es6.html',
  template: '1_es6.html'
})
module.exports = {
  entry:{
    react:'./src/app.js'
  },
  output:{
    path: path.resolve(__dirname, 'build/src'),
    filename: '[name].js'
  },
  module:{
    rules:[
      {
          test: /\.js$/,
          use: [
            // 'react-hot-loader' ,
          {
            loader:'babel-loader',
            options:{
              presets:["latest","react"]
            }
          }],
          exclude: [path.resolve(__dirname, 'node_modules')]
      }
    ]
  },
  plugins: [
    html
  ]
}

