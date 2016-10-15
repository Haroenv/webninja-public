import del from 'del';
import fs from './core/fs';

async function clean({ paths } = {}) {
  await del(paths || [
    '.tmp',
    'build/*',
    '!build/dll.js',
    '!build/dll',
    '!build/public',
    '!build/public/assets',
    '!build/public/assets/dll.*',
    '!build/.git',
  ], {
    dot: true,
  });

  await fs.makeDir('build/public');
}

export default clean;
