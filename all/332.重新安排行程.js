/*
 * @lc app=leetcode.cn id=332 lang=javascript
 *
 * [332] 重新安排行程
 */

// @lc code=start
/**
 * @param {string[][]} tickets
 * @return {string[]}
 */
var findItinerary = function (tickets) {
  const dict = {},
    n = tickets.length
  for (const [from, to] of tickets) {
    if (!dict[from]) dict[from] = []
    if (!dict[to]) dict[to] = []
    dict[from].push(to)
  }
  for (const key in dict) dict[key].sort((a, b) => (a > b ? 1 : a < b ? -1 : 0))

  const ans = []
  return dfs(dict, 'JFK', ans, n) ? ans : []

  function dfs(dict, pos, ans, n) {
    ans.push(pos)
    const paths = dict[pos]
    if (!paths.length) {
      if (ans.length === n + 1) {
        return true
      } else {
        ans.pop()
      }
      return ans.length === n + 1
    }
    const size = paths.length
    for (let i = 0; i < size; i++) {
      const [path] = paths.splice(i, 1)
      if (dfs(dict, path, ans, n)) return true
      paths.splice(i, 0, path)
    }
    ans.pop()
    return false
  }
}

// @lc code=end

findItinerary([
  ['JFK', 'KUL'],
  ['JFK', 'NRT'],
  ['NRT', 'JFK'],
])
