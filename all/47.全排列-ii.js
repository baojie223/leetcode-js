/*
 * @lc app=leetcode.cn id=47 lang=javascript
 *
 * [47] 全排列 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// 回溯剪枝
var permuteUnique = function (nums) {
  nums.sort((a, b) => a - b)
  const path = [],
    used = new Array(nums.length).fill(false),
    ans = []
  backtrack(nums, path, used, ans)
  return ans
}

function backtrack(nums, path, used, ans) {
  if (path.length === nums.length) {
    ans.push([...path])
    return
  }

  for (let i = 0; i < nums.length; i++) {
    if (used[i]) continue
    if (i > 0 && nums[i] === nums[i - 1] && !used[i - 1]) continue
    path.push(nums[i])
    used[i] = true
    backtrack(nums, path, used, ans)
    used[i] = false
    path.pop()
  }
}

// @lc code=end
permuteUnique([2, 2, 1, 1])
