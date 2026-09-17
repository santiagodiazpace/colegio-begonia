import { copyFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

const output = new URL('../dist/colegio-begonia/browser/', import.meta.url);
copyFileSync(new URL('index.html', output), new URL('404.html', output));
writeFileSync(new URL('.nojekyll', output), '');
console.log(`GitHub Pages preparado en ${fileURLToPath(output)}`);
