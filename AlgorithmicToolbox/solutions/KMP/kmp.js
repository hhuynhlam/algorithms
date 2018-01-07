/**
 * Given an input and a pattern, return if the pattern exists in the input.
 *
 * Time Complexity: O(n + m), n = input.length, m = pattern.length
 */

const computeLPS = require('./computeLPS');

function kmp(input, pattern) {
  const inputArray = input.split('');
  const patternArray = pattern.split('');

  let currentIndex = 0;
  let patternIndex = 0;
  let isFound = false;
  const lpsArray = computeLPS(input);

  while (!isFound && currentIndex < inputArray.length) {
    if (patternArray[patternIndex] === inputArray[currentIndex]) {
      if (patternIndex + 1 === patternArray.length) {
        isFound = true;
      } else {
        currentIndex += 1;
        patternIndex += 1;
      }
    } else if (patternIndex === 0) {
      currentIndex += 1;
    } else {
      patternIndex = lpsArray[patternIndex - 1];
    }
  }

  return isFound;
}

module.exports = kmp;
