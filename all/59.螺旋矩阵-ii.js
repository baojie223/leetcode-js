/*
 * @lc app=leetcode.cn id=59 lang=javascript
 *
 * [59] 螺旋矩阵 II
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function (n) {
  const ans = new Array(n).fill(null).map(() => [])
  let t = 0,
    b = n - 1,
    l = 0,
    r = n - 1
  let num = 1
  while (true) {
    for (let i = l; i <= r; i++) ans[t][i] = num++
    if (++t > b) break
    for (let i = t; i <= b; i++) ans[i][r] = num++
    if (--r < l) break
    for (let i = r; i >= l; i--) ans[b][i] = num++
    if (--b < t) break
    for (let i = b; i >= t; i--) ans[i][l] = num++
    if (++l > r) break
  }
  return ans
}
// @lc code=end
