// 350. Intersection of Two Arrays II

/* PROMPT ===================

Given two arrays, write a function to compute their intersection.

Example:
  Given nums1 = [1, 2, 2, 1], nums2 = [2, 2], return [2, 2].

Note:
  - Each element in the result should appear as many times as it shows in both arrays.
  - The result can be in any order.

Follow up:
  - What if the given array is already sorted? How would you optimize your algorithm?
  - What if nums1's size is small compared to nums2's size? Which algorithm is better?
  - What if elements of nums2 are stored on disk, and the memory is limited such that you cannot load all elements into the memory at once?

*/

// SOLUTION =================

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
const intersect = (nums1, nums2) => {
  const result = []
  const map = {}
  let shorter = nums1
  let longer = nums2

  if (nums1.length > nums2.length) {
    shorter = nums2
    longer = nums1
  }

  for (let i = 0; i < shorter.length; i++) {
    map[shorter[i]] = map[shorter[i]] || 0
    map[shorter[i]]++
  }

  for (let i = 0; i < longer.length; i++) {
    if (map[longer[i]]) {
      result.push(longer[i])
      map[longer[i]]--
    }
  }

  return result
}
