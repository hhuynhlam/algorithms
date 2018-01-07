/**
 * Given a string S, you are allowed to convert it to a palindrome by adding
 * characters in front of it. Find and return the shortest palindrome you can
 * find by performing this transformation.

 * For example:

 * Given "aacecaaa", return "aaacecaaa".
 * Given "abcd", return "dcbabcd".
 */

const computeLPS = require('../../../AlgorithmicToolbox/solutions/KMP/computeLPS');

function reverse(input) {
  return input.split('').reverse().join('');
}

function shortestPalindromeKMP(input) {
  const processed = `${input}#${reverse(input)}`;
  const lpsArray = computeLPS(processed);
  const indexOfLPS = lpsArray.pop();

  return `${reverse(input.substr(indexOfLPS))}${input}`;
}

module.exports = shortestPalindromeKMP;
