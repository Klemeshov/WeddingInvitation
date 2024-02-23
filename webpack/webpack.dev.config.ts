import path from 'path';
import { Configuration as WebpackConfiguration, HotModuleReplacementPlugin } from 'webpack';
import { Configuration as WebpackDevServerConfiguration } from 'webpack-dev-server';
import { merge } from 'webpack-merge';
import { baseConfig } from './webpack.base.config';

interface Configuration extends WebpackConfiguration {
  devServer?: WebpackDevServerConfiguration;
}

const config: Configuration = merge(baseConfig, {
  mode: 'development',
  output: {
    publicPath: '/'
  },
  plugins: [new HotModuleReplacementPlugin()],
  devtool: 'inline-source-map',
  devServer: {
    static: path.join(__dirname, '../public'),
    historyApiFallback: true,
    port: 4000,
    allowedHosts: 'all',
    open: true,
    hot: true
  }
});

export default config;
