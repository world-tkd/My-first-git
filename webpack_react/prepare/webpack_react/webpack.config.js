module.exports = {
  //入口js
  entry: "./src/js/main.js",
  //输出
  output: {
    path: __dirname,
    filename: "./dist/bundle.js"
  },

  module: {

    loaders: [
      //babel处理js
      {
        test: /\.js?$/,
        exclude: /node_modules/, //排除此文件夹
        loader: 'babel-loader'
      },
      //处理css
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      }
    ]
  }
}