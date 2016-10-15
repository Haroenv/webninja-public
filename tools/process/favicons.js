import Promise from 'bluebird';
import path from 'path';
import minify from 'jsonminify';
import fs from './../core/fs';
import config from '../../app/config';

async function generateFavicons({ build } = {}) {
  if (!build) {
    await fs.writeFile('./build/favicons.json', JSON.stringify([], null, 2));
    return;
  }

  const favicons = Promise.promisify(require('favicons'));

  await new Promise((resolve) => {
    favicons(path.resolve(__dirname, '../../app/assets/images/favicons/favicon.png'), {
      appName: config.favicons.appName,
      appDescription: config.favicons.appDescription,
      developerName: config.favicons.developerName,
      developerURL: config.favicons.developerURL,
      path: '/assets/images/favicons',
      background: config.favicons.background,
      display: 'browser',
      orientation: 'portrait',
      start_url: '/',
      version: '1.0',
      online: false,
      preferOnline: config.favicons.preferOnline,
      icons: {
        android: true,
        appleIcon: true,
        appleStartup: false,
        coast: false,
        favicons: true,
        firefox: true,
        windows: true,
        yandex: false,
      },
    }, async (error, response) => {
      if (error) {
        throw new Error(error);
      }

      // save images
      await Promise.all(response.images.map(async (image): boolean => {
        const filepath = `./build/public/assets/images/favicons/${image.name}`;
        await fs.writeFile(filepath, image.contents);

        return true;
      }));

      // save manifests
      await Promise.all(response.files.map(async (file): boolean => {
        const filepath = `./build/public/assets/images/favicons/${file.name}`;
        await fs.writeFile(filepath, file.contents);

        return true;
      }));

      // save html
      let json = JSON.stringify(response.html, null, 2);
      if (build) json = minify(json);
      await fs.writeFile('./build/favicons.json', json);

      resolve();
    });
  });
}

export default generateFavicons;
