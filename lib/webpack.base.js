const path = require('path');
const glob = require('glob');
const friendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const htmlWebpackPlugin = require('html-webpack-plugin');
const miniCssExtractPlugin = require('mini-css-extract-plugin');

const Root = process.cwd();

const setMPA = () => {
  const entry = {};
  const htmlWebpackPlugins = [];
  const entryFiles = glob.sync(path.join(Root, './src/*/index.js'));
  entryFiles.map((file) => {
    const match = file.match(/src\/(.*)\/index.js/);
    console.log(match);
    const pageName = match && match[1];
    entry[pageName] = file;
    htmlWebpackPlugins.push(new htmlWebpackPlugin({
      title: 'app',
      filename: `${pageName}.html`,
      template: `./src/${pageName}/index.html`,
      chunks: [pageName],
      inject: true,
      minify: {
        html5: true,
        collapseWhitespace: true,
        preserveLineBreaks: false,
        minifyCSS: true,
        minifyJS: true,
        removeComments: true,
      },
    }));
  });
  return {
    entry,
    htmlWebpackPlugins,
  };
};
const { entry, htmlWebpackPlugins } = setMPA();

module.exports = {
  entry,

  stats: 'errors-only',
  module: {
    rules: [{
      test: /\.js$/,
      use: [
        'babel-loader',
      ],
    }, {
      test: /\.css$/,
      use: [
        miniCssExtractPlugin.loader,
        'css-loader',
        {
          loader: 'postcss-loader',
          options: {
            postcssOptions: {
              plugins: [
                [
                  'autoprefixer',
                  {
                    overrideBrowserslist: ['ios >7'],
                  },
                ],
              ],
            },
          },
        },
        {
          loader: 'px2rem-loader',
          options: {
            remUnit: 75,
            remPrecision: 8,
          },
        },
      ],
    },
    {
      test: /\.less$/,
      use: [
        miniCssExtractPlugin.loader,
        'css-loader',
        'less-loader',
      ],
    },
    {
      test: /\.png$/,
      use: [{
        loader: 'file-loader',
        options: {
          name: '[name]_[hash:4].[ext]',
          outputPath: 'images/',
        },
      }, {
        loader: 'url-loader',
        options: {
          limit: 1024 * 1024,
          esModule: false,
          name: '[hash:4].[ext]',
        },
      }],
    },
    {
      test: /\.html$/,
      use: {
        loader: 'html-loader',
        options: {
          esModule: false,
        },
      },
    },

    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new friendlyErrorsWebpackPlugin(),
    new miniCssExtractPlugin({
      filename: '[name]_[contenthash:4].css',
    }),
  ].concat(htmlWebpackPlugins),

};
