/**
 * Given a string S, you are allowed to convert it to a palindrome by adding
 * characters in front of it. Find and return the shortest palindrome you can
 * find by performing this transformation.

 * For example:

 * Given "aacecaaa", return "aaacecaaa".
 * Given "abcd", return "dcbabcd".
 */

function reverse(input) {
  return input.split('').reverse().join('');
}

function shortestPalindrome(input) {
  const inputArray = input.split('');
  const reversedInput = reverse(input);

  let index = 0;
  let palindromeIndex = null;

  while (!palindromeIndex && index < inputArray.length) {
    const prefix = input.substr(0, inputArray.length - index);
    const suffix = reversedInput.substr(index);

    if (prefix === suffix) {
      palindromeIndex = index;
    } else {
      index += 1;
    }
  }

  return `${reversedInput.substr(0, palindromeIndex)}${input}`;
}

module.exports = shortestPalindrome;
