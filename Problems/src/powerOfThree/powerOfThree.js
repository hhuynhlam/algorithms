/**
 * Given an integer, write a function to determine if it is a power of three.
 *
 * Follow up:
 * Could you do it without using any loop / recursion?
 */

function powerOfThree(n) {
  return (Math.log10(n) / Math.log10(3)) % 1 === 0;
}

module.exports = powerOfThree;
