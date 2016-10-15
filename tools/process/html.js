import Promise from 'bluebird';
import glob from 'glob';
import del from 'del';
import { minify } from 'html-minifier';
import filesize from 'filesize';
import fs from './../core/fs';

export default async function processHTMLFiles({ build } = {}) {
  const ncp = Promise.promisify(require('ncp'));

  let inputBytes = 0;
  let outputBytes = 0;

  if (build) {
    await new Promise((resolve) => {
      glob('./build/public/assets/html/**/*.html', async (error, files) => {
        if (error) {
          throw new Error(error);
        }

        await Promise.all(files.map(async (file): boolean => {
          try {
            await new Promise(async (fileResolve) => {
              await fs.readFile(file, 'utf-8', async (e, html) => {
                if (e) throw new Error(e);

                await fs.stat(file, (x, stats) => {
                  if (x) throw new Error(x);

                  inputBytes += stats.size;
                });

                try {
                  const minified = minify(html, {
                    useShortDoctype: true,
                    sortClassName: true,
                    sortAttributes: true,
                    minifyCSS: true,
                    minifyJS: true,
                    collapseWhitespace: true,
                    conservativeCollapse: true,
                  });

                  await fs.writeFile(file, minified);

                  await fs.stat(file, (failure, stats) => {
                    if (failure) throw new Error(failure);

                    outputBytes += stats.size;
                    fileResolve();
                  });
                }
                catch (minificationError) {
                  throw new Error(`Parsed File: ${file} - ${minificationError}`);
                }
              });
            });
          }
          catch (e) {
            throw new Error(e);
          }

          return true;
        }));

        const input = filesize(inputBytes);
        const output = filesize(outputBytes);
        const percentage = (inputBytes === outputBytes) ? 0 :
        (Math.floor((1 - Number(outputBytes / inputBytes)) * 10000) / 100);

        console.log(`Minified ${input} to ${output} (${percentage}% saved)`);

        resolve();
      });
    });
  }

  await ncp('./build/public/assets/html', './build/public');

  await del(['./build/public/assets/html']);
};
