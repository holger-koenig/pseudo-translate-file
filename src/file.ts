import fs from 'fs';
import processLine from './line.js';

interface Item {
  name: string,
  value: string,
}

interface OutputObject {
  [propName: string]: string;
}

const translateFile = (sourceFileName: string, targetFileName: string) => {
  const content = fs.readFileSync(sourceFileName);
  const oIn = JSON.parse(content.toString('utf8'));
  const oOut:OutputObject = {};

  Object.entries(oIn).forEach((item:[string, any]) => {
    const [name, value] = item;
    oOut[name] = processLine(value);
  });

  fs.writeFileSync(targetFileName, JSON.stringify(oOut, null, 2));
};

export default translateFile;
