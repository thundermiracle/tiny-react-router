console.log(`[babel mode]: ${process.env.NODE_ENV}`);

const babelBaseConfig = {
  presets: ['@babel/env', '@babel/react'],
  plugins: [
    'add-module-exports',
    'react-require',
    ['@babel/plugin-proposal-decorators', { legacy: true }],
    [
      '@babel/plugin-transform-runtime',
      {
        helpers: false,
        regenerator: true,
      },
    ],
  ],
};

module.exports = babelBaseConfig;
