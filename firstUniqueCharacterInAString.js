// 387. First Unique Character in a String

/* PROMPT ===================

Given a string, find the first non-repeating character in it and return it's index. If it doesn't exist, return -1.

Examples:
  s = "leetcode"
  return 0.

  s = "loveleetcode",
  return 2.

Note: You may assume the string contain only lowercase letters.

*/

// SOLUTION =================

/**
 * @param {string} s
 * @return {number}
 */
const firstUniqChar = (s) => {
  for (let i = 0; i < s.length; i++) {
    if (s.indexOf(s[i]) === s.lastIndexOf(s[i])) return i
  }
  return -1
}
