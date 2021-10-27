### [TypeScript com ReactJS, Redux e Redux Saga | Diego Fernandes](https://www.youtube.com/watch?v=OXxul6AvXNs)
Apr 2, 2019  

:octocat: https://github.com/rocketseat-content/youtube-typescript-reactjs  

Adicionar tipagem em nossos componentes? Por que? Nesse vídeo vamos entender a lógica por trás de adicionar o TypeScript em uma aplicação ReactJS utilizando Redux e Redux Saga.  

## Article

[TypeScript: Vantagens, mitos, dicas e conceitos fundamentais](https://blog.rocketseat.com.br/typescript-vantagens-mitos-conceitos/)  

## TypeScript

- https://www.typescriptlang.org/

- https://create-react-app.dev/docs/adding-typescript/

### Install

```
yarn create react-app my-app --template typescript
```

```
yarn start
```

### Install ESLint

```
yarn add eslint-config-airbnb eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react eslint-config-prettier eslint-plugin-prettier prettier @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint-import-resolver-typescript -D
```

### Create `.eslintrc.js` file

```
module.exports = {
  env: {
    browser: true,
    es6: true,
    jest: true,
  },
  extends: [
    'react-app',
    'airbnb',
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['react', 'import', 'jsx-a11y'],
  rules: {
    'react/jsx-filename-extension': [
      'error',
      {
        extensions: ['.tsx'],
      },
    ],
    'import/prefer-default-export': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-member-accessibility': 'off'
  },
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      typescript: {},
    },
  },
};
```