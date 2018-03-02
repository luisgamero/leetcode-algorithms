// 91. Valid Palindrome

/* PROMPT ===================

Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.

For example,
  "A man, a plan, a canal: Panama" is a palindrome.
  "race a car" is not a palindrome.

Note:
  Have you consider that the string might be empty? This is a good question to ask during an interview.

For the purpose of this problem, we define empty string as valid palindrome.

*/

// SOLUTION =================

/**
 * @param {string} s
 * @return {boolean}
 */
const isPalindrome = (s) => {
  if (s === '') return true
  const stripped = (s.toLowerCase()).replace(/[\W_]/g, '')
  const reversed = stripped.split('').reverse((a, b) => a - b).join('')
  return stripped === reversed
}
