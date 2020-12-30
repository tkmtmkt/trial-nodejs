study-nodejs
============

Learning Node.js

パッケージ         | 内容
-------------------+------
jest               | テストフレームワーク
jest-junit         | テスト結果をJUnit形式で出力する
eslint             | スクリプト静的解析ツール
jsdoc              | ドキュメント生成ツール
webpack            | webpack本体
webpack-cli        | webpackのコマンドラインツール
webpack-dev-server | 開発環境用WEBサーバ
babel-loader       | webpackでBabelを使えるようにする
@babel/core        | Babel本体
@babel/preset-env  | 指定したブラウザ環境で動作するように変換するプラグイン

操作
----

### プロジェクト作成

```sh
# 初期設定
$ npm init -y

# 開発環境用パッケージインストール
$ npm install --save-dev jest jest-junit
$ npm install --save-dev eslint
$ npm install --save-dev jsdoc
$ npm install --save-dev webpack webpack-cli webpack-dev-server
$ npm install --save-dev @babel/core @babel/preset-env babel-loader

# 設定ファイル生成
$ npx eslint --init
$ npx jest --init
```

### ビルド

```sh
# ユニットテスト
$ npm test

# 静的解析
$ npm run lint

# ドキュメント生成
$ npm run jsdoc

# ビルド
$ npm run build

# 実行
$ npm run start
```

http://{サーバIPアドレス}:3000/
