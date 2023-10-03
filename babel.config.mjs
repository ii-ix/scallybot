export default {
  plugins: [
    '@babel/plugin-transform-runtime',
    '@babel/transform-runtime',
    'babel-plugin-transform-import-meta',
  ],
  presets: [
    ['@babel/preset-env', { targets: { node: 'current' }, modules: false }],
    '@babel/preset-typescript',
  ],
  extensions: ['.mjs'],
  sourceType: 'module',
};
