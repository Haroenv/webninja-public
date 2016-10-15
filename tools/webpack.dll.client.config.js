import path from 'path';
import webpack from 'webpack';
import AssetsPlugin from 'assets-webpack-plugin';

module.exports = {
  context: path.resolve(__dirname, '../app'),
  output: {
    path: path.join(__dirname, '../build/public/assets'),
    filename: '[name].[chunkhash].js',
    library: '[name]_[hash]',
    libraryTarget: 'var',
  },
  resolve: {
    root: path.resolve(__dirname, '../app'),
    modulesDirectories: ['node_modules'],
    extensions: ['', '.webpack.js', '.js'],
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
          cacheDirectory: true,
          babelrc: true,
          plugins: [],
        },
      },
      {
        test: /\.json$/,
        loader: 'json-loader',
      },
    ],
  },
  debug: true,
  progress: true,
  devtool: 'eval',
  target: 'web',
  plugins: [
    new AssetsPlugin({
      path: path.resolve(__dirname, '../build'),
      filename: 'dll.js',
      processOutput: (x) => {
        const dll = x;
        dll.client.js = `/assets/${dll.client.js}`;

        return `module.exports = ${JSON.stringify(dll)};`;
      },
    }),
    new webpack.DllPlugin({
      path: path.join(__dirname, '../build/dll', '[name]-manifest.json'),
      name: '[name]_[hash]',
      context: path.join(__dirname, '../app'),
    }),
    new webpack.optimize.OccurrenceOrderPlugin(true),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        screw_ie8: true,
        warnings: false,
      },
    }),
    new webpack.optimize.AggressiveMergingPlugin(),
  ],
};
