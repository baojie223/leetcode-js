/*
 * @lc app=leetcode.cn id=216 lang=javascript
 *
 * [216] 组合总和 III
 */

// @lc code=start
/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function (k, n) {
  const ans = []
  backtrack(k, n, 1, [], ans)
  return ans
}

function backtrack(k, n, start, path, ans) {
  if (k === 0) {
    if (n === 0) ans.push([...path])
    return
  }
  for (let i = start; i <= 9; i++) {
    if (n - i < 0) break
    path.push(i)
    backtrack(k - 1, n - i, i + 1, path, ans)
    path.pop()
  }
}
// @lc code=end
