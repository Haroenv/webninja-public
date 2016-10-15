import run from './run';
import clean from './clean';
import copy from './copy';
import bundle from './bundle';

async function build() {
  await run(clean.bind(undefined, {
    paths: [
      'build/public/assets/main.*.js',
    ],
  }));

  await run(copy.bind(undefined, {
    build: true,
  }));

  await run(bundle);
}

export default build;
