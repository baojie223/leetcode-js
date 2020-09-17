/*
 * @lc app=leetcode.cn id=685 lang=javascript
 *
 * [685] 冗余连接 II
 */

// @lc code=start
/**
 * @param {number[][]} edges
 * @return {number[]}
 */
var findRedundantDirectedConnection = function (edges) {
  let ans = []
  for (let i = edges.length - 1; i >= 0; i--) {
    if (isRootedTree(edges, i)) {
      ans = edges[i]
      break
    }
  }
  return ans
}

function isRootedTree(edges, i) {
  const parentMap = {},
    childMap = {}

  for (let k = edges.length - 1; k >= 0; k--) {
    if (k === i) continue

    const [s, e] = edges[k]

    if (!childMap[s]) childMap[s] = []
    if (!childMap[e]) childMap[e] = []
    childMap[s].push(e)

    if (parentMap[e]) return false
    else parentMap[e] = ''
    parentMap[e] = s
  }

  let root
  for (let key in childMap) {
    if (!parentMap[key]) {
      root = Number(key)
      break
    }
  }
  if (!root) return false

  const visited = []

  let flag = dfs(root, childMap, visited)

  return flag && visited.length === Object.keys(childMap).length
}

function dfs(root, map, visited) {
  if (visited.includes(root)) {
    return false
  }
  visited.push(root)
  const children = map[root]

  for (let child of children) {
    if (!dfs(child, map, visited)) return false
  }

  return true
}
// @lc code=end

findRedundantDirectedConnection([
  [1, 2],
  [2, 3],
  [3, 4],
  [4, 1],
  [1, 5],
])
