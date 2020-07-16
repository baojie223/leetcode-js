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
  // 上色法, 时间O(n), 空间O(n)
  const visited = [];
  const queue = [];
  for (let i = 0; i < graph.length; i++) {
    if (visited[i]) continue;
    queue.push(i);
    visited[i] = 1;

    while (queue.length) {
      const curr = queue.shift();
      const currColor = visited[curr];
      const neighborColor = -currColor;
      for (let j = 0; j < graph[curr].length; j++) {
        const neighbor = graph[curr][j];
        if (!visited[neighbor]) {
          visited[neighbor] = neighborColor;
          queue.push(neighbor);
        } else if (visited[neighbor] !== neighborColor) {
          return false;
        }
      }
    }
  }
  return true;
};
// @lc code=end
