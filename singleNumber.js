// 136. Single Number

/* PROMPT ===================

Given an array of integers, every element appears twice except for one. Find that single one.

Note:
  Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?

*/

// SOLUTION =================

/**
 * @param {number[]} nums
 * @return {number}
 */
const singleNumber = (nums) => {
  // create map of existing numbers
  const map = {}

  // fill map (initial value of true, for duplicate num change value to false)
  nums.forEach((num) => {
    map[num] = !map[num]
  })

  // iterate through map, return single num (with value of true)
  for (let num in map) {
    if (map.hasOwnProperty(num) && map[num]) return +num
  }
}
