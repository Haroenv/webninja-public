import path from 'path';
import webpack from 'webpack';


module.exports = {
  context: path.resolve(__dirname, '../app'),
  output: {
    path: path.join(__dirname, '../build/dll'),
    filename: '[name].js',
    library: '[name]',
    libraryTarget: 'commonjs2',
  },
  debug: true,
  progress: true,
  devtool: 'eval',
  target: 'node',
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
  plugins: [
    new webpack.DllPlugin({
      path: path.join(__dirname, '../build/dll', '[name]-manifest.json'),
      name: '[name]',
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
