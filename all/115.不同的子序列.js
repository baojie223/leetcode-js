/*
 * @lc app=leetcode.cn id=115 lang=javascript
 *
 * [115] 不同的子序列
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
// 动态规划
var numDistinct = function (s, t) {
  const m = s.length,
    n = t.length
  const dp = new Array(m + 1).fill(null).map(() => new Array(n + 1).fill(0))
  dp[0][0] = 1
  for (let i = 1; i < m + 1; i++) dp[i][0] = 1
  for (let i = 1; i < n + 1; i++) dp[0][i] = 0
  for (let i = 1; i < m + 1; i++) {
    for (let j = 1; j < n + 1; j++) {
      if (s[i - 1] === t[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + dp[i - 1][j]
      } else {
        dp[i][j] = dp[i - 1][j]
      }
    }
  }
  return dp[m][n]
}

// 回溯剪枝, 不知道为什么leetcode会得出错误答案
// var numDistinct = function (s, t) {
//   const m = s.length,
//     n = t.length
//   if (n === 0) return 1
//   if (m === 0) return 0
//   const map = {}
//   for (let i = 0; i < m; i++) {
//     if (!map[s[i]]) map[s[i]] = []
//     map[s[i]].push(i)
//   }

//   backtrack(t, 0, map)
//   return ans
// }
// let ans = 0

// function backtrack(t, index, map, path = []) {
//   if (path.length === t.length) {
//     ans++
//     return
//   }
//   const nums = map[t[index]]
//   if (!nums) return
//   for (let i = 0; i < nums.length; i++) {
//     if (path.length > 0 && path[path.length - 1] > nums[i]) continue
//     if (path.includes(nums[i])) continue
//     path.push(nums[i])
//     backtrack(t, index + 1, map, path)
//     path.pop()
//   }
// }
// @lc code=end

numDistinct('babgbag', 'bag')
