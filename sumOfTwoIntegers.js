// 371. Sum of Two Integers

/* PROMPT ===================

Calculate the sum of two integers a and b, but you are not allowed to use the operator + and -.

Example:
  Given a = 1 and b = 2, return 3.

*/

// SOLUTION =================

/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
const getSum = (a, b) => {
  let carry

  while (b !== 0) {
    carry = a & b
    a = a ^ b
    b = carry << 1
  }
  return a
}

// note: this requires bit manipulation
//
