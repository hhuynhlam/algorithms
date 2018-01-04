/**
 * Given a non-negative integer represented as a non-empty array of digits, plus one to the integer.
 * You may assume the integer do not contain any leading zero, except the number 0 itself.
 * The digits are stored such that the most significant digit is at the head of the list.
 *
 * Better solution for numbers overflowing Number.MAX_SAFE_INTEGER.
 */

function plusOneRecursive(digits, index) {
  if (!index && index !== 0) {
    return plusOneRecursive(digits, digits.length - 1);
  }

  if (index === 0 && digits[index] === 9) {
    digits[index] = 0;
    digits.unshift(1);

    return digits;
  }

  if (digits[index] === 9) {
    digits[index] = 0;

    return plusOneRecursive(digits, index - 1);
  }

  digits[index] += 1;

  return digits;
}

module.exports = plusOneRecursive;
