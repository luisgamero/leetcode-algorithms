// 171. Excel Sheet Column Number

/* PROMPT ===================

Given a column title as appear in an Excel sheet, return its corresponding column number.

For example:

  A -> 1
  B -> 2
  C -> 3
  ...
  Z -> 26
  AA -> 27
  AB -> 28

*/

// SOLUTION =================

/**
 * @param {string} s
 * @return {number}
 */
const titleToNumber = (s) => {
  let total = 0

  for (let i = 0; i < s.length; i++) {
    // in reverse order, convert letter to number
    const letter = s[s.length - 1 - i]
    const num = letter.charCodeAt(0) - 64
    // based on position, get "column" value (26^i * num)
    const value = Math.pow(26, i) * num
    // add to total
    total += value
  }

  return total
}
