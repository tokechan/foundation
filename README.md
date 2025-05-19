# 映画検索アプリ

TMDBのAPIを使用した映画検索・詳細表示アプリです。React、TypeScript、Viteを使用して構築されています。

## 機能

- 人気映画の一覧表示
- 映画のキーワード検索
- 映画の詳細情報表示
- レスポンシブデザイン

## 技術スタック

- React 19
- TypeScript
- Vite
- TMDB API
- CSS (カスタムスタイリング)

## プロジェクト構造

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```

## セットアップ方法

1. リポジトリをクローン
   ```
   git clone [リポジトリURL]
   cd [プロジェクト名]
   ```

2. 依存関係をインストール
   ```
   npm install
   ```

3. 環境変数の設定
   プロジェクトのルートに`.env`ファイルを作成し、TMDBのAPIキーを設定します：
   ```
   VITE_TMDB_API_KEY=あなたのAPIキー
   ```
   
   APIキーは[TMDB](https://www.themoviedb.org/)で取得できます。

4. 開発サーバーの起動
   ```
   npm run dev
   ```

## ビルド方法

本番用ビルドを作成するには以下のコマンドを実行します：

```npm run build
```

ビルドされたファイルは`dist`ディレクトリに出力されます。

## 今後の計画

- ユーザー認証機能の追加
- お気に入り機能の実装
- レビュー投稿機能の追加
- より高度な検索フィルター

## ライセンス

このプロジェクトは[MITライセンス](LICENSE)の下で公開されています。
