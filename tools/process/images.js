import Promise from 'bluebird';
import glob from 'glob';
import imagemin from 'imagemin';
import imageminMozjpeg from 'imagemin-mozjpeg';
import imageminPngquant from 'imagemin-pngquant';
import filesize from 'filesize';
import fs from './../core/fs';

const basePath = 'build/public/assets';

export default async function minifyImages({ build } = {}) {
  if (!build) return;

  let inputBytes = 0;
  let outputBytes = 0;

  await new Promise((resolve) => {
    glob(`${basePath}/images/**/*.{jpg,png}`, async (error, files) => {
      if (error) {
        throw new Error(error);
      }

      await Promise.all(files.map(async (file): boolean => {
        try {
          await fs.stat(file, (e, stats) => {
            if (e) throw new Error(e);

            inputBytes += stats.size;
          });

          await imagemin([file], {
            plugins: [
              imageminMozjpeg(),
              imageminPngquant(),
            ],
          }).then(async (minified) => {
            await Promise.all(minified.map(async (image): boolean => {
              try {
                await fs.writeFile(file, image.data);

                await fs.stat(file, (e, stats) => {
                  if (e) throw new Error(e);

                  outputBytes += stats.size;
                });
              }
              catch (e) {
                throw new Error(e);
              }

              return true;
            }));
          });
        }
        catch (e) {
          throw new Error(e);
        }

        return true;
      }));

      const input = filesize(inputBytes);
      const output = filesize(outputBytes);
      const percentage = Math.floor((1 - (outputBytes / inputBytes)) * 10000) / 100;

      console.log(`Minified ${input} to ${output} (${percentage}% saved)`);

      resolve();
    });
  });
};
