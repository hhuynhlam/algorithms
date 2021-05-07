const maximumPointsFromCards = require('./maximumPointsFromCards')

describe('maximumPointsFromCards', () => {
  const testCases = [
    [[1, 2, 3, 4, 5, 6, 1], 3, 12],
    [[2, 2, 2], 2, 4],
    [[9, 7, 7, 9, 7, 7, 9], 7, 55],
    [[1, 1000, 1], 1, 1],
    [[1, 79, 80, 1, 1, 1, 200, 1], 3, 202],
    [[100, 40, 17, 9, 73, 75], 3, 248],
  ]

  it('passes test cases', () => {
    testCases.forEach((c) => {
      expect(maximumPointsFromCards(c[0], c[1])).toEqual(c[2])
    })
  })
})
