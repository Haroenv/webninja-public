import Promise from 'bluebird';
import del from 'del';
import run from './run';
import fs from './core/fs';
import pkg from '../package.json';
import favicons from './process/favicons';
import images from './process/images';
import lang from './process/lang';
import html from './process/html';

async function copy({ build } = {}) {
  const ncp = Promise.promisify(require('ncp'));

  await Promise.all([
    ncp('app/assets', 'build/public/assets'),
  ]);

  await del(['build/public/assets/css', 'build/public/assets/scripts']);

  await run(favicons.bind(undefined, {
    build,
  }));

  await run(images.bind(undefined, {
    build,
  }));

  await run(lang.bind(undefined, {
    build,
  }));

  await run(html.bind(undefined, {
    build,
  }));

  await fs.writeFile('./build/package.json', JSON.stringify({
    private: true,
    engines: pkg.engines,
    dependencies: pkg.dependencies,
    scripts: {
      start: 'node server.js',
    },
  }, null, 2));
}

export default copy;
