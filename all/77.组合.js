/*
 * @lc app=leetcode.cn id=77 lang=javascript
 *
 * [77] 组合
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
  const ans = []
  if (k === 0) return ans
  backtrack(1, n, k, [], ans)
  return ans
}

function backtrack(s, n, k, path, ans) {
  if (path.length === k) {
    ans.push([...path])
    return
  }
  for (let i = s; i <= n; i++) {
    path.push(i)
    backtrack(i + 1, n, k, path, ans)
    path.pop()
  }
}
// @lc code=end
