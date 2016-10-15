import Promise from 'bluebird';
import glob from 'glob';
import del from 'del';
import yaml from 'yamljs';
import minify from 'jsonminify';
import fs from './../core/fs';

export default async function processLangFiles({ build } = {}) {
  await new Promise((resolve) => {
    glob('./build/public/assets/lang/**/*.yml', async (error, files) => {
      if (error) {
        throw new Error(error);
      }

      await Promise.all(files.map(async (file): boolean => {
        try {
          let json = yaml.load(file);
          json = JSON.stringify(json, null, 2);

          if (build) json = minify(json);

          await fs.writeFile(file.replace('.yml', '.json'), json);
          await del([file]);
        }
        catch (e) {
          throw new Error(e);
        }

        return true;
      }));

      resolve();
    });
  });
};
