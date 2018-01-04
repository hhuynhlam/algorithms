const powerOfThree = require('./powerOfThree');

describe('#powerOfThree', () => {
  it('Case 1', () => {
    expect(powerOfThree(1))
      .toEqual(true);
  });

  it('Case 2', () => {
    expect(powerOfThree(9))
      .toEqual(true);
  });

  it('Case 3', () => {
    expect(powerOfThree(27))
      .toEqual(true);
  });

  it('Case 4', () => {
    expect(powerOfThree(15))
      .toEqual(false);
  });

  it('Case 5', () => {
    expect(powerOfThree(243))
      .toEqual(true);
  });
});
