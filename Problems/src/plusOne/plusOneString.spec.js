const plusOneString = require('./plusOneString');

describe('#plusOneString', () => {
  it('adds to 0', () => {
    expect(plusOneString([0]))
      .toEqual([1]);
  });

  it('adds to 10', () => {
    expect(plusOneString([1, 0]))
      .toEqual([1, 1]);
  });

  it('adds to 19', () => {
    expect(plusOneString([1, 9]))
      .toEqual([2, 0]);
  });

  it('adds to 99', () => {
    expect(plusOneString([9, 9]))
      .toEqual([1, 0, 0]);
  });
});
