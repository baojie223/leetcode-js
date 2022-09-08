/*
 * @lc app=leetcode.cn id=667 lang=javascript
 *
 * [667] 优美的排列 II
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} k
 * @return {number[]}
 */
var constructArray = function (n, k) {
  const ans = []
  let num = 1
  for (let i = 0; i < n; i++) {
    if (k === -1) {
      ans.push(i + 1)
      continue
    }
    ans.push(num)
    if (i % 2 === 0) {
      num += k--
    } else {
      num -= k--
    }
  }
  return ans
}
// @lc code=end

// n = 3 k = 1 | 1 2 3
// n = 3 k = 2 | 1 3 2
// n = 4 k = 1 | 1 2 3 4
// n = 4 k = 2 | 1 3 2 4
// n = 4 k = 3 | 1 4 2 3
// n = 5 k = 1 | 1 2 3 4 5
// n = 5 k = 2 | 1 3 2 4 5
// n = 5 k = 3 | 1 4 2 3 5
// n = 5 k = 4 | 1 5 2 4 3    1 4   5 3   2 2  4 1  3 0  n + 1 -1
