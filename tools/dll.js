import webpack from 'webpack';
import depcheck from 'depcheck';
import each from 'lodash/each';
import some from 'lodash/some';
import path from 'path';
import run from './run';
import clean from './clean';
import serverConfig from './webpack.dll.server.config';
import clientConfig from './webpack.dll.client.config';

export default async function buildDLL() {
  await run(clean.bind(undefined, {
    paths: [
      'build/public/assets/client.*.js',
    ],
  }));

  await new Promise((resolve, reject) => {
    try {
      const options = {
        package: path.join(__dirname, '../package.json'),
        withoutDev: false, // [DEPRECATED] check against devDependencies
        ignoreBinPackage: false, // ignore the packages with bin entry
        ignoreDirs: [ // folder with these names will be ignored
          'sandbox',
          'dist',
          'bower_components',
        ],
        parsers: { // the target parsers
          '*.js': [
            depcheck.parser.jsx,
          ],
        },
        detectors: [ // the target detectors
          depcheck.detector.requireCallExpression,
          depcheck.detector.importDeclaration,
        ],
        specials: [ // the target special parsers
          depcheck.special.eslint,
          depcheck.special.webpack,
          depcheck.special.babel,
        ],
      };

      const ignore = [
        'webpack-smart-offline-plugin',
      ];

      depcheck(path.join(__dirname, '../app'), options, (unused) => {
        const server = new Set();
        const client = new Set();


        each(unused.using, ((origins, module) => {
          if (module[0] !== '#' && ignore.indexOf(module) === -1) {
            let added = false;
            let count = 0;
            if (some(origins, (item) => item.indexOf('server.js') !== -1)) {
              server.add(module);
              added = true;
              count += 1;
            }
            if (some(origins, (item) => item.indexOf('client.js') !== -1)) {
              client.add(module);
              added = true;
              count += 1;
            }

            if (!added || count !== origins.length) {
              client.add(module);
              server.add(module);
            }
          }
        }));

        const clientDeps = [...client];
        const serverDeps = [...server];

        const webpackServerConfig = Object.assign({}, serverConfig, {
          entry: {
            server: serverDeps,
          },
        });

        const webpackClientConfig = Object.assign({}, clientConfig, {
          entry: {
            client: clientDeps,
          },
        });

        webpack([webpackClientConfig, webpackServerConfig]).run((err, stats) => {
          if (err) {
            return reject(err);
          }

          console.log(stats.toString());
          return resolve();
        });
      });
    }
    catch (e) {
      console.log(e);
    }
  });
}
