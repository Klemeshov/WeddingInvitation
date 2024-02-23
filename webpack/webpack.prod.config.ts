import path from 'path';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import { Configuration } from 'webpack';
import { merge } from 'webpack-merge';
import { baseConfig } from './webpack.base.config';

const config: Configuration = merge(baseConfig, {
  mode: 'production',
  output: {
    path: path.resolve(__dirname, '../build'),
    filename: '[name].[contenthash].js',
    publicPath: ''
  },
  plugins: [
    new CleanWebpackPlugin()
  ]
});

export default config;
