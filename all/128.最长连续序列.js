/*
 * @lc app=leetcode.cn id=128 lang=javascript
 *
 * [128] 最长连续序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
  const numsSet = new Set(nums)
  let longestLength = 0
  for (const num of numsSet) {
    if (numsSet.has(num - 1)) {
      continue
    }
    let currentNum = num
    let currentLength = 1
    while (numsSet.has(currentNum + 1)) {
      currentNum++
      currentLength++
    }
    longestLength = Math.max(longestLength, currentLength)
  }
  return longestLength
};
// @lc code=end

