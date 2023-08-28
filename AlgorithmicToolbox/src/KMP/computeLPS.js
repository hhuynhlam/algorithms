/**
 * Compute an array for input such that each index contains the length of
 * the longest proper prefix that is also a suffix of substring up to
 * that index.

 * Time Complexity: O(n), n = input.length
 */

function computeLPS(input) {
  const inputArray = input.split('');
  const lpsArray = inputArray.map(() => null);

  let currentIndex = 0;
  let prefixIndex = 0;

  while (currentIndex < inputArray.length) {
    if (currentIndex === 0) {
      lpsArray[currentIndex] = 0;
      currentIndex += 1;
    } else if (inputArray[currentIndex] === inputArray[prefixIndex]) {
      prefixIndex += 1;
      lpsArray[currentIndex] = prefixIndex;
      currentIndex += 1;
    } else if (prefixIndex === 0) {
      lpsArray[currentIndex] = 0;
      currentIndex += 1;
    } else {
      prefixIndex = lpsArray[prefixIndex - 1];
    }
  }

  return lpsArray;
}

module.exports = computeLPS;
