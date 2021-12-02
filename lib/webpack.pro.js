const { merge } = require('webpack-merge');
const cssnano = require('cssnano');
const optimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');
const HtmlWebpackExternalsPlugin = require('html-webpack-externals-plugin');
const baseConfig = require('./webpack.base');

const prodConfig = {
  mode: 'production',
  plugins: [
    new optimizeCssAssetsWebpackPlugin({
      assetNameRegExp: /\.css$/g,
      cssProcessor: cssnano,
    }),
    new HtmlWebpackExternalsPlugin({
      externals: [
        {
          module: 'react',
          entry: 'https://unpkg.com/react@16/umd/react.development.js',
          global: 'React',
        },
        {
          module: 'react-dom',
          entry: 'https://unpkg.com/react-dom@16/umd/react-dom.development.js',
          global: 'ReactDOM',
        },
      ],
    }),
  ],
  optimization: {
    splitChunks: {
      minSize: 0,
      cacheGroups: {
        // vendors: {
        //     test: /[\\/]node_modules[\\/]/,
        //     priority: -10
        // },
        commons: {
          minChunks: 2,
          name: 'commons',
          chunks: 'all',
        },
      },
    },
  },
  devtool: 'cheap-source-map',
};
module.exports = merge(baseConfig, prodConfig);
