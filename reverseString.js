// 344. Reverse String

/* PROMPT ===================

Write a function that takes a string as input and returns the string reversed.

Example:
Given s = "hello", return "olleh".

*/

// SOLUTION =================

/**
 * @param {string} s
 * @return {string}
 */
const reverseString = (s) => {
  let reversed = ''

  for (let i = s.length - 1; i >= 0; i--) {
    reversed += s[i]
  }

  return reversed
}
