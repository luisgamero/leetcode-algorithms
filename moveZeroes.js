// 283. Move Zeroes

/* PROMPT ===================

Given an array nums, write a function to move all zeroes to the end of it while maintaining the relative order of the non-zero elements.

For example, given nums = [0, 1, 0, 3, 12], after calling your function, nums should be [1, 3, 12, 0, 0].

Note:
1. You must do this in-place without making a copy of the array.
2. Minimize the total number of operations.

*/

// SOLUTION =================

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// note: solution is not optimal
const moveZeroes = (nums) => {
  let numZeroes = 0
  const len = nums.length
  const tempArr = []

  for (let i = 0; i < len; i++) {
    if (nums[i] === 0) {
      numZeroes++
    } else {
      tempArr.push(nums[i])
    }
  }

  while (numZeroes > 0) {
    tempArr.push(0)
    numZeroes--
  }

  for (let i = 0; i < len; i++) {
    nums[i] = tempArr[i]
  }
}


// ALTERNATE SOLUTION =======

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const moveZeroes = (nums) => {
  let lastNonZeroIndex = -1

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      lastNonZeroIndex++
      nums[lastNonZeroIndex] = nums[i]
    }
  }

  for (let i = lastNonZeroIndex + 1; i < nums.length; i++) {
    nums[i] = 0
  }
}
