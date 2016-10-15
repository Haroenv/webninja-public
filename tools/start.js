import Browsersync from 'browser-sync';
import webpack from 'webpack';
import webpackMiddleware from 'webpack-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import run from './run';
import runServer from './runServer';
import webpackConfig from './webpack.config';
import clean from './clean';
import copy from './copy';

const DEBUG = !process.argv.includes('--release');

async function start() {
  await run(clean);

  await run(copy.bind(undefined, {
    build: false,
  }));

  await new Promise((resolve) => {
    webpackConfig.filter((x) => x.target !== 'node').forEach((config) => {
      /* eslint-disable no-param-reassign */
      config.entry = ['webpack-hot-middleware/client'].concat(config.entry);
      config.output.filename = config.output.filename.replace('[chunkhash]', '[hash]');
      config.output.chunkFilename = config.output.chunkFilename.replace('[chunkhash]', '[hash]');
      config.plugins.push(new webpack.HotModuleReplacementPlugin());
      config.plugins.push(new webpack.NoErrorsPlugin());
      config
        .module
        .loaders
        .filter((x) => x.loader === 'babel-loader')
        .forEach((x) => {
          x.query = {
            ...x.query,
            plugins: [
              ...((x.query && x.query.plugins) ? x.query.plugins : []),
              ['react-transform', {
                transforms: [{
                  transform: 'react-transform-hmr',
                  imports: ['react'],
                  locals: ['module'],
                }, {
                  transform: 'react-transform-catch-errors',
                  imports: ['react', 'redbox-react'],
                },
                ],
              },
              ],
            ],
          };
        });
        /* eslint-enable no-param-reassign */
    });

    const bundler = webpack(webpackConfig);
    const wpMiddleware = webpackMiddleware(bundler, {
      publicPath: webpackConfig[0].output.publicPath,
      stats: webpackConfig[0].stats,
    });

    const hotMiddlewares = bundler
      .compilers
      .filter((compiler) => compiler.options.target !== 'node')
      .map((compiler) => webpackHotMiddleware(compiler));

    let handleServerBundleComplete = () => {
      runServer((err, host) => {
        if (!err) {
          const bs = Browsersync.create();
          bs.init({
            ...(DEBUG ? {} : {
              notify: false,
              ui: false,
            }),

            proxy: {
              target: host,
              middleware: [wpMiddleware, ...hotMiddlewares],
            },

            open: false,

            files: [],
          }, resolve);
          handleServerBundleComplete = runServer;
        }
      });
    };

    bundler.plugin('done', () => handleServerBundleComplete());
  });
}

export default start;
