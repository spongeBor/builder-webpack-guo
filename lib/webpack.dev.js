const merge = require('webpack-merge');
const baseConfig = require('./webpack.base');

const devConfig = {
  mode: 'development',
  devServer: {
    open: true,
    hot: true,
  },
  devtool: 'source-map',
  stats: 'errors-only',
};
module.exports = merge(baseConfig, devConfig);
