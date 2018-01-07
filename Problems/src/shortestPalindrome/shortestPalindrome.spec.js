const shortestPalindrome = require('./shortestPalindrome');

describe('#shortestPalindrome', () => {
  it('Case 1', () => {
    expect(shortestPalindrome('aacecaaa'))
      .toEqual('aaacecaaa');
  });

  it('Case 2', () => {
    expect(shortestPalindrome('abcd'))
      .toEqual('dcbabcd');
  });
});
