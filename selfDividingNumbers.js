// 728. Self Dividing Numbers

/* PROMPT ===================

A self-dividing number is a number that is divisible by every digit it contains.

For example, 128 is a self-dividing number because 128 % 1 == 0, 128 % 2 == 0, and 128 % 8 == 0.

Also, a self-dividing number is not allowed to contain the digit zero.

Given a lower and upper number bound, output a list of every possible self dividing number, including the bounds if possible.

Example 1:
  Input:
  left = 1, right = 22
  Output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 15, 22]

Note: The boundaries of each input argument are 1 <= left <= right <= 10000.

*/

// SOLUTION =================

/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
const selfDividingNumbers = (left, right) => {
  let numStr
  const validNumsArr = []

  while (left <= right) {
    numStr = left.toString()
    if (numStr.indexOf('0') !== -1) {
      left++
      continue
    }

    if (numStr.split('').filter(digit => left % +digit === 0).length === numStr.length) {
      validNumsArr.push(left)
    }
    left++
  }

  return validNumsArr
}

// ALTERNATE SOLUTION =======

/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
const selfDividingNumbers = (left, right) => {
  let numStr
  const validNumsArr = []

  while (left <= right) {
    numStr = left.toString()
    if (numStr.indexOf('0') !== -1) {
      left++
      continue
    }

    if (numStr.split('').filter(digit => left % +digit === 0).length === numStr.length) {
      validNumsArr.push(left)
    }
    left++
  }

  return validNumsArr
}