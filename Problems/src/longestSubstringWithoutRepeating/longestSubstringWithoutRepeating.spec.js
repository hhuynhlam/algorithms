const lengthOfLongestSubstring = require('./longestSubstringWithoutRepeating')

describe('longestSubstringWithoutRepeating', () => {
  it('passes test cases', () => {
    expect(lengthOfLongestSubstring('abcabcbb')).toEqual(3)
    expect(lengthOfLongestSubstring('bbbb')).toEqual(1)
    expect(lengthOfLongestSubstring('pwwkew')).toEqual(3)
    expect(lengthOfLongestSubstring('')).toEqual(0)
  })
})
