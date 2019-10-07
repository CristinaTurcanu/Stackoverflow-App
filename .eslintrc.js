module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'eslint:recommended',
    'standard',
    'plugin:vue/strongly-recommended',
    'prettier',
    'prettier/standard',
    'prettier/vue',
  ],
  plugins: ['prettier', 'standard', 'vue'],
  parserOptions: {
    parser: 'babel-eslint',
  },
};