// output.pathに絶対パスを指定する必要があるため、pathモジュールを読み込んでおく
const path = require('path');
const src = path.join(__dirname, 'src');
const dist = path.join(__dirname, 'dist');

module.exports = {
  // モードの設定、v4系以降はmodeを指定しないと、webpack実行時に警告が出る
  mode: 'development',

  // エントリーポイントの設定
  context: src,
  entry: {
    apple: './js/apple',
    orange: './js/orange',
  },

  // 出力の設定
  output: {
    // 出力先のパス（絶対パスを指定する必要がある）
    path: dist,

    // 出力するファイル名
    filename: 'js/[name].js'
  },

  devServer: {
    open: true,
    openPage: 'index.html',
    contentBase: dist,
    watchContentBase: true,
    compress: true,
    disableHostCheck: true,
    host: '0.0.0.0',
    port: 3000,
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader'
      }
    ]
  }
};
