/*
 * @lc app=leetcode.cn id=646 lang=javascript
 *
 * [646] 最长数对链
 */

// @lc code=start
/**
 * @param {number[][]} pairs
 * @return {number}
 */
var findLongestChain = function (pairs) {
  const n = pairs.length
  pairs.sort((a, b) => a[0] - b[0])
  let ans = 1
  const g = new Array(n + 10).fill(Number.MAX_SAFE_INTEGER)
  for (let i = 0; i < n; i++) {
    let l = 1,
      r = i + 1
    while (l < r) {
      const mid = (l + r) >> 1
      if (g[mid] >= pairs[i][0]) r = mid
      else l = mid + 1
    }
    g[r] = Math.min(g[r], pairs[i][1])
    ans = Math.max(r, ans)
  }

  return ans
}

// var findLongestChain = function (pairs) {
//   const n = pairs.length
//   pairs.sort((a, b) => a[0] - b[0])
//   const dp = new Array(n)
//   let ans = 1
//   for (let i = 0; i < n; i++) {
//     dp[i] = 1
//     for (let j = i - 1; j >= 0 && dp[i] === 1; j--) {
//       if (pairs[j][1] < pairs[i][0]) dp[i] = dp[j] + 1
//     }
//     ans = Math.max(dp[i], ans)
//   }
//   return ans
// }
// @lc code=end
