/*
 * @lc app=leetcode.cn id=93 lang=javascript
 *
 * [93] 复原IP地址
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string[]}
 */
// 回溯
var restoreIpAddresses = function (s) {
  const n = s.length
  const path = [],
    ans = []
  backtrack(s, 0, n - 1, 4, path, ans)
  return ans
}

function backtrack(s, i, j, num, path, ans) {
  if (j - i < num - 1 || j - i > num * 3 - 1) return
  if (path.length === 4) {
    ans.push(path.join('.'))
    return
  }
  for (let x = 0; x < 3; x++) {
    const curr = s.substring(i, i + x + 1)
    if (Number(curr) > 255 || (curr[0] === '0' && curr.length > 1)) {
      return
    }
    path.push(curr)
    backtrack(s, i + x + 1, j, num - 1, path, ans)
    path.pop()
  }
}
// @lc code=end
