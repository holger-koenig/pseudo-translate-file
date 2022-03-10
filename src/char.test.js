import processChar from './char.js';

describe('Test character expansion', () => {
  test('Changes chars from asci>=33 to <127', () => {
    expect(processChar('a')).toEqual('ａ');
    expect(processChar('A')).toEqual('Ａ');
    expect(processChar('1')).toEqual('１');
    expect(processChar('!')).toEqual('！');
    expect(processChar(String.fromCharCode(33))).toEqual('！');
    expect(processChar(String.fromCharCode(126))).toEqual('～');
  });

  test('It does not replace other chars', () => {
    expect(processChar('ä')).toEqual('ä');
    expect(processChar(String.fromCharCode(32))).toEqual(String.fromCharCode(32));
    expect(processChar(String.fromCharCode(127))).toEqual(String.fromCharCode(127));
  });
});
