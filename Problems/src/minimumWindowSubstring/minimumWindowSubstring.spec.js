const minimumWindowSubstring = require('./minimumWindowSubstring');

describe('#minimumWindowSubstring', () => {
  it('Case 1', () => {
    expect(minimumWindowSubstring('adobecodebanc', 'abc'))
      .toEqual('banc');
  });

  it('Case 2', () => {
    expect(minimumWindowSubstring('adobecodebanc', 'z'))
      .toEqual('');
  });

  it('Case 3', () => {
    expect(minimumWindowSubstring('a', 'a'))
      .toEqual('a');
  });

  it('Case 4', () => {
    expect(minimumWindowSubstring('aa', 'aa'))
      .toEqual('aa');
  });
});
