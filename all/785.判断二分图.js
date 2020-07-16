/*
 * @lc app=leetcode.cn id=785 lang=javascript
 *
 * [785] 判断二分图
 */

// @lc code=start
/**
 * @param {number[][]} graph
 * @return {boolean}
 */
var isBipartite = function (graph) {
  const visited = [];
  const queue = [];
  for (let i = 0; i < graph.length; i++) {
    if (visited[i]) continue;
    queue.push(i);
    visited[i] = 1;
    while (queue.length > 0) {
      const current = queue.shift();
      const currentColor = visited[current];
      const neighborColor = -currentColor;
      for (let j = 0; j < graph[current].length; j++) {
        const neighbor = graph[current][j];
        if (!visited[neighbor]) {
          visited[neighbor] = neighborColor;
          queue.push(neighbor);
        }
        if (visited[neighbor] !== neighborColor) return false;
      }
    }
  }
  return true;
};
// @lc code=end
