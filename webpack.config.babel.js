import webpack from 'webpack';
import path from 'path';
import babelConfigGenerator from './scripts/babelConfigGenerator.js';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import StylelintWebpackPlugin from 'stylelint-webpack-plugin';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import 'dotenv-defaults/config';

const TITLE = process.env.APP_TITLE;
const defaultPort = process.env.WEB_PORT;
const outputDirectory = process.env.OUTPUT_DIRECTORY;
const cacheDirectory = '.cache'; // needs to be changed in the package.json too

const https = false;

const config = {
  config: {}
};
const webpackConfig = (env, args) => {
  const mode = env.mode === 'production' ? 'production' : 'development';
  const devMode = mode !== 'production';
  const babelConfig = babelConfigGenerator(false, mode);

  /**
   * @todo Extract common config
   * @body A lot of the config below can be extracted away to make the project
   * specific configuration separate from the boilerplate
   **/
  const finalWebpackConfig = Object.assign({}, config.config, {
    mode: mode,
    devtool: mode === 'development' ? 'source-map' : false,
    entry: './src/index.tsx',
    target: 'web',
    devServer: {
      port: process.env.PORT || defaultPort,
      hot: devMode,
      historyApiFallback: true,
      host: '0.0.0.0',
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': '*'
      },
      https: https
    },
    plugins: [
      new CleanWebpackPlugin(),
      new webpack.ProgressPlugin(),
      new MiniCssExtractPlugin(),
      /**
       * @todo Add favicon support
       * @body Use FaviconsWebpackPlugin
       */
      new HtmlWebpackPlugin({
        title: TITLE,
        template: path.join(__dirname, 'src', 'Templates', 'index.hbs')
      }),
      new StylelintWebpackPlugin({
        cache: true,
        cacheLocation: `./${cacheDirectory}/`,
        fix: true
      })
      // new WorkboxPlugin.InjectManifest({
      //   swSrc: './src/service-worker.js'
      // })
    ],
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: [
            {
              loader: 'babel-loader',
              options: {
                ...babelConfig,
                babelrc: false
              }
            }
          ],
          include: path.resolve(__dirname, 'src'),
          exclude: /node_modules/
        },
        {
          test: /\.s?css$/,
          //exclude: /node_modules/,
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
              options: {
                esModule: true
              }
            },
            {
              loader: 'css-loader',
              options: {
                importLoaders: 1
              }
            },
            {
              loader: 'postcss-loader'
            }
          ]
        }
      ]
    },
    resolve: {
      extensions: ['.ts', '.js', '.tsx', '.jsx', '.mjs', '.json']
    },
    performance: {
      hints: false
    },
    stats: {
      all: false,
      assets: true,
      assetsSort: 'size',
      builtAt: true,
      children: true,
      env: true,
      timings: true,
      errors: true,
      warnings: true,
      errorDetails: true,
      performance: false
    },
    cache: {
      idleTimeout: 60000,
      idleTimeoutAfterLargeChanges: 1000,
      idleTimeoutForInitialStore: 0,
      maxAge: 5184000000,
      memoryCacheUnaffected: true,
      type: 'filesystem',
      allowCollectingMemory: true,
      cacheDirectory: path.resolve(__dirname, cacheDirectory),
      buildDependencies: {
        config: [__filename]
      }
    },
    experiments: {
      cacheUnaffected: true
    },
    node: false,
    optimization: {
      runtimeChunk: 'single',
      splitChunks: {
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            chunks: 'all'
          }
        }
      }
    },
    output: {
      filename: '[name].js',
      path: path.resolve(__dirname, outputDirectory),
      pathinfo: false,
      publicPath: '/'
    }
  });

  return finalWebpackConfig;
};

module.exports = webpackConfig;
