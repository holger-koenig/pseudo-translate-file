import fs from 'fs';
import processLine from './line.js';

const translateFile = (sourceFileName, targetFileName) => {
  const content = fs.readFileSync(sourceFileName);
  const oIn = JSON.parse(content);
  const oOut = {};

  Object.entries(oIn).forEach((item) => {
    const [name, value] = item;
    oOut[name] = processLine(value);
  });

  fs.writeFileSync(targetFileName, JSON.stringify(oOut, null, 2));
};

export default translateFile;
