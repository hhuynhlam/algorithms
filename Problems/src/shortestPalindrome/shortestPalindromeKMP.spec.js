const shortestPalindromeKMP = require('./shortestPalindromeKMP');

describe('#shortestPalindromeKMP', () => {
  it('Case 1', () => {
    expect(shortestPalindromeKMP('aacecaaa'))
      .toEqual('aaacecaaa');
  });

  it('Case 2', () => {
    expect(shortestPalindromeKMP('abcd'))
      .toEqual('dcbabcd');
  });
});
