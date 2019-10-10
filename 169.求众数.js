/*
 * @lc app=leetcode.cn id=169 lang=javascript
 *
 * [169] 求众数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  let collectMap = new Map()
  for (let i = 0; i < nums.length; i++) {
    if (!collectMap.has(nums[i])) {
      collectMap.set(nums[i], 0)
    }
    const old = collectMap.get(nums[i])
    collectMap.set(nums[i], old + 1)
  }
  const entries = collectMap.entries()
  for (let [key, value] of entries) {
    if (value > nums.length / 2) {
      return key
    }
  }
};
// @lc code=end
