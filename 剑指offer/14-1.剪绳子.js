/**
 * @param {number} n
 * @return {number}
 */
var cuttingRope = function (n) {
  const visited = Array(n).fill(0);
  visited[0] = 0;
  visited[1] = 0;
  visited[2] = 1;
  return dp(n, visited);
};

function dp(n, visited) {
  if (visited[n]) return visited[n];
  let max = 0;
  for (let i = 1; i < n; i++) {
    max = Math.max(max, dp(i, visited) * dp(n - i, visited));
  }
  visited[n] = max;
  return max;
}

cuttingRope(10);
