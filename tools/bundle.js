import webpack from 'webpack';
import webpackConfig from './webpack.config';
import fs from './core/fs';
import path from 'path';

function bundle() {
  return new Promise((resolve, reject) => {
    webpack(webpackConfig).run((err, stats) => {
      if (err) {
        return reject(err);
      }

      console.log(stats.toString(webpackConfig[0].stats));
      fs.writeFile(path.join(__dirname, 'assets.json'), JSON.stringify(stats.toJson(), null, 2));
      return resolve();
    });
  });
}

export default bundle;
