const path = require('path');

const buildEslintCommand = (filenames) =>
  `next lint --fix --file ${filenames.map((f) => path.relative(process.cwd(), f)).join(' --file ')}`;

module.exports = {
  '*': ['secretlint --maskSecrets'],
  '*.{js,cjs,mjs,json,ts,tsx,css}': ['prettier --write'],
  '*.{ts,tsx}': ['bash -c tsc --noEmit', buildEslintCommand, 'markuplint'],
};
