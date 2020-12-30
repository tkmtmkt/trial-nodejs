study-nodejs
============

概要
----

### ファイル構成

```
study-nodejs/
├─src/
│  ├─assets/                 静的リソース
│  └─js/                     Javascriptソース
├─test/
│  └─js/                     Javascriptテストコード
├─dist/
│  ├─js/                     webpack出力
│  ├─jsdoc/                  JSDoc出力
│  └─reports/
│      ├─coverage/           カバレッジ計測結果
│      └─jest/               テスト結果
├─node_modules/
├─tool/                       開発環境ツール
│  ├─bin/
│  └─node-{version}-linux-x64/
├─.babelrc                    Babel設定ファイル
├─.eslintrc.json              ESLint設定ファイル
├─jest.config.js              Jest設定ファイル
├─jsdoc.config.json           JSDoc設定ファイル
├─package-lock.json
├─package.json
├─setenv.sh                   開発環境ツールPATH設定シェル
└─webpack.config.js           webpack設定ファイル
```

### 使用パッケージ

パッケージ         | 内容
-------------------|------
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
$ npx jest --init
$ npx eslint --init
```

### ビルド

```sh
# テスト実行
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
