/**
 * Given a string S and a string T, find the minimum window in S which will
 * contain all the characters in T in complexity O(n).

 * For example,
 * S = "ADOBECODEBANC"
 * T = "ABC"
 * Minimum window is "BANC".

 * Note:
 * If there is no such window in S that covers all characters in T, return the
 * empty string "".

 * If there are multiple such windows, you are guaranteed that there will always
 * be only one unique minimum window in S.
 */

function minimumWindowSubstring(input, pattern) {
  let minimum;

  const dictionary =
    pattern.split('').reduce((result, p) => {
      if (result[p]) {
        result[p] += 1;
      } else {
        result[p] = 1;
      }

      return result;
    }, {});

  let foundMatches = 0;
  let head = 0;
  let tail = 0;

  while (head < input.length) {
    if (dictionary[input[head]] || dictionary[input[head]] === 0) {
      dictionary[input[head]] -= 1;

      if (dictionary[input[head]] === 0) {
        foundMatches += 1;
      }
    }

    while (foundMatches === Object.keys(dictionary).length) {
      const matchedWindow = input.slice(tail, head + 1);

      if (!minimum || minimum.length > matchedWindow.length) {
        minimum = matchedWindow;
      }

      if (dictionary[input[tail]] || dictionary[input[tail]] === 0) {
        dictionary[input[tail]] += 1;

        if (dictionary[input[tail]] > 0) {
          foundMatches -= 1;
        }
      }

      tail += 1;
    }

    head += 1;
  }

  return minimum || '';
}

module.exports = minimumWindowSubstring;
