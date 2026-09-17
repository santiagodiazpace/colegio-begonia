import { existsSync, mkdtempSync, rmSync, rmdirSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('../', import.meta.url));
const output = fileURLToPath(new URL('../dist/colegio-begonia/browser/', import.meta.url));
const git = (args, options = {}) => execFileSync('git', args, {
  cwd: root, encoding: 'utf8', ...options,
}).trim();

if (!existsSync(join(output, '404.html')) || !existsSync(join(output, '.nojekyll'))) {
  throw new Error('Ejecutá npm run build:pages antes de publicar.');
}

// Leer el remoto antes de crear un commit evita reemplazar una publicación ajena.
const remote = git(['ls-remote', '--heads', 'origin', 'gh-pages']);
if (remote) git(['fetch', 'origin', 'gh-pages']);
const parent = remote ? git(['rev-parse', 'FETCH_HEAD']) : null;
const gitDir = git(['rev-parse', '--absolute-git-dir']);
const temporary = mkdtempSync(join(tmpdir(), 'colegio-pages-'));

try {
  // Un índice temporal permite publicar sin cambiar la rama ni los archivos de trabajo.
  const env = { ...process.env, GIT_INDEX_FILE: join(temporary, 'index') };
  git(['--git-dir', gitDir, '--work-tree', output, 'add', '--all', '--', '.'], { cwd: output, env });
  const tree = git(['write-tree'], { env });
  const args = ['commit-tree', tree, '-m', 'Deploy sitio a GitHub Pages'];
  if (parent) args.push('-p', parent);
  const commit = git(args);
  git(['update-ref', 'refs/heads/gh-pages', commit]);
  git(['push', 'origin', 'gh-pages']);
  console.log('Rama gh-pages publicada.');
} finally {
  rmSync(join(temporary, 'index'), { force: true });
  rmSync(join(temporary, 'index.lock'), { force: true });
  rmdirSync(temporary);
}
