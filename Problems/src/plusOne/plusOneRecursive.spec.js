const plusOneRecursive = require('./plusOneRecursive');

describe('#plusOneRecursive', () => {
  it('adds to 0', () => {
    expect(plusOneRecursive([0]))
      .toEqual([1]);
  });

  it('adds to 10', () => {
    expect(plusOneRecursive([1, 0]))
      .toEqual([1, 1]);
  });

  it('adds to 19', () => {
    expect(plusOneRecursive([1, 9]))
      .toEqual([2, 0]);
  });

  it('adds to 99', () => {
    expect(plusOneRecursive([9, 9]))
      .toEqual([1, 0, 0]);
  });

  it('adds to 6145390195186705543', () => {
    expect(plusOneRecursive([6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3]))
      .toEqual([6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 4]);
  });
});
