// 169. Majority Element

/* PROMPT ===================

Given an array of size n, find the majority element. The majority element is the element that appears more than ⌊ n/2 ⌋ times.

You may assume that the array is non-empty and the majority element always exist in the array.

*/

// SOLUTION =================

/**
 * @param {number[]} nums
 * @return {number}
 */
const majorityElement = (nums) => {
  const map = {}

  for (let i = 0; i < nums.length; i++) {
    map[nums[i]] = map[nums[i]] || 0
    map[nums[i]]++
    if (map[nums[i]] > (nums.length / 2)) return nums[i]
  }
}
