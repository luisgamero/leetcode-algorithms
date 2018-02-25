// 242. Valid Anagram

/* PROMPT ===================

Given two strings s and t, write a function to determine if t is an anagram of s.

For example,
s = "anagram", t = "nagaram", return true.
s = "rat", t = "car", return false.

Note:
  You may assume the string contains only lowercase alphabets.

*/

// SOLUTION =================

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isAnagram = (s, t) => {
  if (s.length !== t.length) return false

  const sortedS = s.split('').sort()
  const sortedT = t.split('').sort()

  for (let i = 0; i < s.length; i++) {
    if (sortedS[i] !== sortedT[i]) return false
  }

  return true
}
