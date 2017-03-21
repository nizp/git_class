const path = require('path');
// const webpack = require('webpack');
module.exports = {
  entry:[
    './src/app.js'
  ],
  output:{
    //把编译好的文件放在当前目录下的build下
    path:path.resolve(__dirname,'build'),//__dirname:当前目录下
    filename: '[name].js' // 可以打包为多个文件
  },
  module:{
    //编译es6的
    //添加loader需要用rules
    rules: [{
       test: /\.js$/,
       use:[
        'babel-loader'
      ],
      //排除node_modules文件中的js。
      exclude: [path.resolve(__dirname, 'node_modules')]
    
    }]
  }
}