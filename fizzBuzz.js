// 412. Fizz Buzz

/* PROMPT ===================

Write a program that outputs the string representation of numbers from 1 to n.

But for multiples of three it should output “Fizz” instead of the number and for the multiples of five output “Buzz”. For numbers which are multiples of both three and five output “FizzBuzz”.

Example:

  n = 15,

  Return:
  [
      "1",
      "2",
      "Fizz",
      "4",
      "Buzz",
      "Fizz",
      "7",
      "8",
      "Fizz",
      "Buzz",
      "11",
      "Fizz",
      "13",
      "14",
      "FizzBuzz"
  ]

*/

// SOLUTION =================

/**
 * @param {number} n
 * @return {string[]}
 */
const fizzBuzz = (n) => {
  const result = []

  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      result.push('FizzBuzz')
    } else if (i % 3 === 0) {
      result.push('Fizz')
    } else if (i % 5 === 0) {
      result.push('Buzz')
    } else {
      result.push('' + i)
    }
  }

  return result
}

// ALTERNATE SOLUTION =======

/**
 * @param {number} n
 * @return {string[]}
 */
const fizzBuzz = (n) => {
  const result = []

  for (let i = 1; i <= n; i++) {
    let val = ''
    if (i % 3 === 0) val += 'Fizz'
    if (i % 5 === 0) val += 'Buzz'
    result.push(val || val + i)
  }

  return result
}
