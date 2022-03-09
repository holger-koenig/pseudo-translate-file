const processChar = (char) => {
  let retChar = char;
  const ascii = char.charCodeAt(0);
  if (ascii >= 33 && ascii < 127) retChar = String.fromCodePoint(65248 + ascii);
  return retChar;
};

export default processChar;
