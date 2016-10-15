import path from 'path';
import webpack from 'webpack';
import extend from 'extend';
import AssetsPlugin from 'assets-webpack-plugin';
import config from '../app/config';

const GLOBALS = {
  'process.env.NODE_ENV': config.debug ? '"development"' : '"production"',
  __DEV__: config.debug,
};

const customResolverPlugin = new webpack.NormalModuleReplacementPlugin(/#(.*)$/, (request) => {
  if (request.request[0] === '#') {
    const req = request.request.substr(1);
    request.request = path.join(__dirname, `../app/${req}`); // eslint-disable-line no-param-reassign, max-len
  }
});

// config for both client and server side
const webpackConfig = {
  context: path.resolve(__dirname, '../app'),

  output: {
    path: path.resolve(__dirname, '../build/public/assets'),
    publicPath: '/assets/',
    sourcePrefix: '  ',
  },

  module: {
    loaders: [
      {
        test: /\.(js|jsx)?$/,
        loader: 'babel-loader',
        include: [
          path.resolve(__dirname, '../app'),
          path.resolve(__dirname, '../config.js'),
        ],
        query: {
          cacheDirectory: config.debug,
          babelrc: true,
          plugins: [],
        },
      }, {
        test: /\.css/,
        loaders: [
          'isomorphic-style-loader?sourceMap',
          `css-loader?${JSON.stringify({
            sourceMap: config.debug,
            importLoaders: 1,
            modules: true,
            localIdentName: config.debug ? '[name]_[local]_[hash:base64:3]' : '[hash:base64:4]',
            minimize: !config.debug,
          })}`,
          'postcss-loader?pack=default',
        ],
      }, {
        test: /\.json$/,
        loader: 'json-loader',
      }, {
        test: /\.yml$/,
        loaders: ['json-loader', 'yaml-loader'],
      },
      {
        test: /\.txt$/,
        loader: 'raw-loader',
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg|woff|woff2)$/,
        loader: 'url-loader',
        query: {
          name: config.debug ? '[path][name].[ext]?[hash]' : '[hash].[ext]',
          limit: 10000,
        },
      },
      {
        test: /\.(eot|ttf|wav|mp3)$/,
        loader: 'file-loader',
        query: {
          name: config.debug ? '[path][name].[ext]?[hash]' : '[hash].[ext]',
        },
      },
    ],
  },
  resolve: {
    root: path.resolve(__dirname, '../app'),
    modulesDirectories: ['node_modules'],
    extensions: ['', '.webpack.js', '.js', '.json'],
  },
  cache: config.debug,
  debug: config.debug,
  stats: {
    colors: true,
    reasons: config.debug,
    hash: config.verbose,
    version: config.verbose,
    timings: true,
    chunks: config.verbose,
    chunkModules: config.verbose,
    cached: config.verbose,
    cachedAssets: config.verbose,
  },

  postcss(bundler) {
    return {
      default: [
        require('postcss-partial-import')({
          prefix: '',
          addDependencyTo: bundler,
          dirs: [
            path.join(__dirname, '../app/assets/css'),
            path.join(__dirname, '../bower_components'),
          ],
        }),
        require('postcss-custom-properties')(),
        require('postcss-custom-media')(),
        require('postcss-media-minmax')(),
        require('postcss-custom-selectors')(),
        require('postcss-calc')(),
        require('postcss-nesting')(),
        require('postcss-utilities')(),
        require('postcss-color-function')(),
        require('pleeease-filters')(),
        require('pixrem')(),
        require('postcss-selector-matches')(),
        require('postcss-selector-not')(),
        require('autoprefixer')({ browsers: config.autoprefixer.browsers }),
        require('postcss-reporter')({
          clearMessages: true,
        }),
      ],
    };
  },
};

// client-side config
const clientConfig = extend(true, {}, webpackConfig, {
  entry: './client.js',

  output: {
    filename: config.debug ? '[name].js?[chunkhash]' : '[name].[chunkhash].js',
    chunkFilename: config.debug ? '[name].[id].js?[chunkhash]' : '[name].[id].[chunkhash].js',
    libraryTarget: 'var',
  },

  target: 'web',

  plugins: [
    customResolverPlugin,
    new webpack.DllReferencePlugin({
      context: path.join(__dirname, '../app'),
      manifest: require('../build/dll/client-manifest.json'),
      sourceType: 'var',
    }),
    new webpack.DefinePlugin({
      ...GLOBALS,
      'process.env': {
        BROWSER: true,
        NODE_ENV: JSON.stringify(config.debug ? 'development' : 'production'),
      },
    }),
    new AssetsPlugin({
      path: path.resolve(__dirname, '../build'),
      filename: 'assets.js',
      processOutput: (x) => `module.exports = ${JSON.stringify(x)};`,
    }),
    new webpack.optimize.OccurrenceOrderPlugin(true),
    ...config.debug ? [] : [
      new webpack.optimize.DedupePlugin(),
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          screw_ie8: true,
          warnings: config.verbose,
        },
      }),
      new webpack.optimize.AggressiveMergingPlugin(),
    ],
  ],
  devtool: config.debug ? 'eval-source-map' : false,
});

// server-side config
const serverConfig = extend(true, {}, webpackConfig, {
  entry: './server.js',

  output: {
    path: path.resolve(__dirname, '../build'),
    filename: 'server.js',
    chunkFilename: 'server.[name].js',
    libraryTarget: 'commonjs2',
  },

  target: 'node',

  externals: [
    /^\.\/assets$/,
    /^\.\/dll$/,
    /^\.\/favicons\.json$/,
  ],

  plugins: [
    customResolverPlugin,
    new webpack.DllReferencePlugin({
      context: path.join(__dirname, '../app'),
      manifest: require('../build/dll/server-manifest.json'),
      name: '../build/dll/server.js',
      sourceType: 'commonjs2',
    }),
    new webpack.DefinePlugin({
      ...GLOBALS,
      'process.env': {
        BROWSER: false,
        NODE_ENV: JSON.stringify(config.debug ? 'development' : 'production'),
      },
    }),
    new webpack.BannerPlugin('require("source-map-support").install();', {
      raw: true,
      entryOnly: false,
    }),
  ],

  node: {
    console: false,
    global: false,
    process: false,
    Buffer: false,
    __filename: false,
    __dirname: false,
  },

  devtool: 'source-map',
});

export default [clientConfig, serverConfig];
