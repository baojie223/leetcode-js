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
  if (k === 0) return []
  dfs(1, n, [], ans, k)
  return ans
}

function dfs(start, end, path, ans, k) {
  if (k === 0) {
    ans.push([...path])
    return
  }
  for (let i = start; i <= end; i++) {
    path.push(i)
    dfs(i + 1, end, path, ans, k - 1)
    path.pop()
  }
}
// @lc code=end
