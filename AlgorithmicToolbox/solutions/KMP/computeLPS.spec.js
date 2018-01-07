const computeLPS = require('./computeLPS');

describe('#computeLPS', () => {
  it('Case 1', () => {
    expect(computeLPS('a'))
      .toEqual([0]);
  });

  it('Case 2', () => {
    expect(computeLPS('aba'))
      .toEqual([0, 0, 1]);
  });

  it('Case 3', () => {
    expect(computeLPS('abab'))
      .toEqual([0, 0, 1, 2]);
  });

  it('Case 4', () => {
    expect(computeLPS('ababa'))
      .toEqual([0, 0, 1, 2, 3]);
  });

  it('Case 5', () => {
    expect(computeLPS('aaaa'))
      .toEqual([0, 1, 2, 3]);
  });

  it('Case 6', () => {
    expect(computeLPS('aaacaaaaac'))
      .toEqual([0, 1, 2, 0, 1, 2, 3, 3, 3, 4]);
  });
});
