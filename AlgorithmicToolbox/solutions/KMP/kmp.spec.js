const kmp = require('./kmp');

describe('#kmp', () => {
  it('Case 1', () => {
    expect(kmp('abab', 'ba'))
      .toEqual(true);
  });

  it('Case 2', () => {
    expect(kmp('abababac', 'bab'))
      .toEqual(true);
  });

  it('Case 3', () => {
    expect(kmp('abac', 'bab'))
      .toEqual(false);
  });
});
