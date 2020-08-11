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
var permuteUnique = function (nums) {
  const n = nums.length
  const path = [],
    ans = []
  dfs(path, nums, ans)
  return ans

  function dfs(path, nums, ans, bans = []) {
    if (path.length === n) {
      ans.push([...path])
      return
    }
    const visited = []
    for (let i = 0; i < nums.length; i++) {
      if (bans.includes(i)) continue
      if (visited.includes(nums[i])) continue
      visited.push(nums[i])
      path.push(nums[i])
      bans.push(i)
      dfs(path, nums, ans, bans)
      bans.pop()
      path.pop()
    }
  }
}

// @lc code=end
permuteUnique([1, 1, 2])
