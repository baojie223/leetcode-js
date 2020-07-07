/*
 * @lc app=leetcode.cn id=46 lang=javascript
 *
 * [46] 全排列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  const res = []
  backtrack(nums, [], res)
  return res
}

function backtrack(nums, track, res) {
  if (track.length === nums.length) {
    res.push([...track])
    return
  }

  for (let i = 0; i < nums.length; i++) {
    if (track.includes(nums[i])) continue
    track.push(nums[i])
    backtrack(nums, track, res)
    track.pop()
  }
}
// @lc code=end
