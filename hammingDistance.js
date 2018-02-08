// 461. Hamming Distance

/* PROMPT ===================

The Hamming distance between two integers is the number of positions at which the corresponding bits are different.

Given two integers x and y, calculate the Hamming distance.

Note:
- 0 ≤ x, y < 2^31

Example:

  Input: x = 1, y = 4

  Output: 2

  Explanation:
  1   (0 0 0 1)
  4   (0 1 0 0)
         ↑   ↑

The above arrows point to positions where the corresponding bits are different.

*/

// SOLUTION =================
// helper
/**
 * @param {string} bin (binary number string)
 * @param {number} num (number of zeros to left-pad with)
 * @return {string}
 */
const leftpad = (bin, num) => {
  let zeros = ''
  while (num) {
    zeros = zeros + '0'
    num--
  }
  return zeros + bin
}

/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
const hammingDistance = (x, y) => {

}
