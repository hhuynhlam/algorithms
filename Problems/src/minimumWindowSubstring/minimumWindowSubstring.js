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

function minWindow(input, pattern) {
  const lookupTable = createLookupTable(pattern)

  let minimum = ''
  let missingCharSets = Object.keys(lookupTable).length
  let head = 0
  let tail = 0

  for (let head = 0; head < input.length; head += 1) {
    if (lookupTable[input[head]] != null) {
      lookupTable[input[head]] -= 1

      if (lookupTable[input[head]] === 0) {
        missingCharSets -= 1
      }
    }

    while (!missingCharSets) {
      if (lookupTable[input[tail]] != null) {
        const wndw = input.slice(tail, head + 1)

        if (!minimum || wndw.length < minimum.length) {
          minimum = wndw
        }

        lookupTable[input[tail]] += 1

        if (lookupTable[input[tail]] && lookupTable[input[tail]] > 0) {
          missingCharSets += 1
        }
      }

      tail++
    }
  }

  return minimum
}

function createLookupTable(pattern = '') {
  return pattern.split('').reduce((result, p) => {
    if (result[p]) {
      result[p] += 1;
    } else {
      result[p] = 1;
    }

    return result;
  }, {});
}

module.exports = minWindow;
