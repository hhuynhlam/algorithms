const minWindow = require('./minimumWindowSubstring');

describe('#minWindow', () => {
  it('TestlCases', () => {
    expect(minWindow('adobecodebanc', 'abc'))
      .toEqual('banc');

    expect(minWindow('adobecodebanc', 'z'))
      .toEqual('');

    expect(minWindow('a', 'a'))
      .toEqual('a');

    expect(minWindow('aa', 'aa'))
      .toEqual('aa');

    expect(minWindow('abc', 'b'))
      .toEqual('b');

    expect(minWindow('aaaaaaaaaaaabbbbbcdd', 'abcdd'))
      .toEqual('abbbbbcdd');
  });
});
