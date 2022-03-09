import processChar from './char.js';

const getMaxGrow = (length) => {
  if (length < 11) return 2.5;
  if (length < 21) return 1.9;
  if (length < 31) return 1.7;
  if (length < 51) return 1.5;
  if (length < 71) return 1.35;
  return 1.3;
};

const processLine = (inValue) => {
  const chars = [...inValue];
  const cLength = chars.length;
  const maxGrow = getMaxGrow(cLength);

  let grownByChars = 8;
  let openingBracketsCount = 0;

  const outChars = chars.map((char) => {
    let retChar = char;
    if (char === '{') {
      openingBracketsCount += 1;
    } else if (char === '}' && openingBracketsCount) {
      openingBracketsCount -= 1;
    } else {
      const grow = (cLength + grownByChars) / cLength;
      if (grow < maxGrow) {
        if (!openingBracketsCount) {
          grownByChars += 1;
          retChar = processChar(char);
        }
      }
    }

    return retChar;
  });
  return `[G'${outChars.join('')}ฏูİı｜]`;
};

export default processLine;
