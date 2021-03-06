// 217. Contains Duplicate

/* PROMPT ===================

Given an array of integers, find if the array contains any duplicates. Your function should return true if any value appears at least twice in the array, and it should return false if every element is distinct.

*/

// SOLUTION =================

/**
 * @param {number[]} nums
 * @return {boolean}
 */
const containsDuplicate = (nums) => {
  const map = {}

  for (let i = 0; i < nums.length; i++) {
    if (map[nums[i]] === true) return true
    map[nums[i]] = true
  }
  return false
}
