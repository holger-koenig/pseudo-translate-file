#!/usr/bin/env node
import translateFile from './file.js';

const args = process.argv.slice(2);

if (args.length !== 2) {
  // eslint-disable-next-line no-console
  console.log('Usage: pseudoTranslateFile <source file name> <target file name>\n');
  process.exit(1);
}

translateFile(args[0], args[1]);
