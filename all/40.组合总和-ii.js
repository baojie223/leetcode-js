/*
 * @lc app=leetcode.cn id=40 lang=javascript
 *
 * [40] 组合总和 II
 */

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
// 滑动窗口
var combinationSum2 = function (candidates, target) {
  candidates.sort((a, b) => a - b)
  const path = [],
    ans = []
  backtrack(target, path, candidates, ans)
  return ans
}

function backtrack(target, path, candidates, ans) {
  if (target < 0) return
  if (target === 0) {
    ans.push([...path])
    return
  }
  let prev = -1
  for (let i = 0; i < candidates.length; i++) {
    const curr = candidates[i]
    if (prev === curr) continue
    prev = curr
    path.push(curr)
    backtrack(target - curr, path, candidates.slice(i + 1), ans)
    path.pop()
  }
}
// @lc code=end

combinationSum2([10, 1, 2, 7, 6, 1, 5], 8)
