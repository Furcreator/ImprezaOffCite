import { ESLint } from 'eslint';

/** @type {ESLint.ConfigData} */
const config = {
  env: {
    browser: true,
    es2021: true,
  },

  extends: ['eslint:recommended'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    // Ваши правила ESLin
    'no-console': 'warn',
    semi: ['error', 'always'],
  },
};
// eslint.config.js
export default [
  {
    files: ['**/*.js'],
    languageOptions: {
      globals: {
        // Добавьте глобальные переменные
      },
    },
    // Добавьте другие настройки ESLint
  },
];
