/**
 * Given a non-negative integer represented as a non-empty array of digits, plus one to the integer.
 * You may assume the integer do not contain any leading zero, except the number 0 itself.
 * The digits are stored such that the most significant digit is at the head of the list.
 *
 * Only works for numbers less than overflow of Number.MAX_SAFE_INTEGER.
 */

function plusOneString(digits) {
  const digitString = digits.join('');
  const parsedDigit = parseInt(digitString, 10);

  const plusOne = parsedDigit + 1;
  const plusOneDigits = plusOne.toString().split('');

  return plusOneDigits.map(n => parseInt(n, 10));
}

module.exports = plusOneString;
