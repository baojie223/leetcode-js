/*
 * @lc app=leetcode.cn id=207 lang=javascript
 *
 * [207] 课程表
 */

// @lc code=start
/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
// DFS, 先将边缘列表转换为邻接表, 然后判断是否为有向无环图, 是的话就成功
var canFinish = function (numCourses, prerequisites) {
  const adjacency = new Array(numCourses).fill(null).map(() => [])
  for (let i = 0; i < prerequisites.length; i++) {
    const [from, to] = prerequisites[i]
    adjacency[from].push(to)
  }
  const flags = new Array(numCourses).fill(0)
  for (let i = 0; i < numCourses; i++) {
    if (!dfs(adjacency, flags, i)) return false
  }
  return true
}

function dfs(adjacency, flags, i) {
  if (flags[i] === -1) return true
  if (flags[i] === 1) return false
  flags[i] = 1
  for (let j = 0; j < adjacency[i].length; j++) {
    if (!dfs(adjacency, flags, adjacency[i][j])) return false
  }
  flags[i] = -1
  return true
}
// @lc code=end

canFinish(2, [[0, 1]])
