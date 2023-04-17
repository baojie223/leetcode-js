/*
 * @lc app=leetcode.cn id=287 lang=javascript
 *
 * [287] Find the Duplicate Number
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
  const n = nums.length
  for (let i = 1; i <= n; i++) {
    let found = false
    for (let j = 0; j < n; j++) {
      if (nums[j] === i) {
        if (found) return i
        found = true
      }
    }
  }
};
// @lc code=end

