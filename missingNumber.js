// 268. Missing Number

/* PROMPT ===================

Given an array containing n distinct numbers taken from 0, 1, 2, ..., n, find the one that is missing from the array.

Example 1

  Input: [3,0,1]
  Output: 2

Example 2

  Input: [9,6,4,2,3,5,7,0,1]
  Output: 8

Note:
  Your algorithm should run in linear runtime complexity. Could you implement it using only constant extra space complexity?

*/

// SOLUTION =================

/**
 * @param {number[]} nums
 * @return {number}
 */
const missingNumber = (nums) => {
  let indexTotal = nums.length
  let numsTotal = 0

  for (let i = 0; i < nums.length; i++) {
    indexTotal += i
    numsTotal += nums[i]
  }

  return indexTotal - numsTotal
}
