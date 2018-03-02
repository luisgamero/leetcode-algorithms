// 7. Reverse Integer

/* PROMPT ===================

Given a 32-bit signed integer, reverse digits of an integer.

Example 1:

  Input: 123
  Output:  321

Example 2:

  Input: -123
  Output: -321

Example 3:

  Input: 120
  Output: 21

Note:
  Assume we are dealing with an environment which could only hold integers within the 32-bit signed integer range. For the purpose of this problem, assume that your function returns 0 when the reversed integer overflows.

*/

// SOLUTION =================

/**
 * @param {number} x
 * @return {number}
 */
const reverse = (x) => {
  if (x === 0) return x
  const isNeg = x < 0
  let reversed = ''
  let digit

  x = Math.abs(x)
  while (x !== 0) {
    digit = x % 10
    reversed += digit
    x = (x - digit) / 10
  }

  reversed = +reversed

  if (reversed > (Math.pow(2, 31) - 1)) return 0

  return isNeg ? -1 * reversed : reversed
}
