/**
 * @param {number} m
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var movingCount = function (m, n, k) {
  const visited = new Array(m * n).fill(false);
  return dfs(m, n, k, 0, 0, visited);
};

function dfs(m, n, k, i, j, visited) {
  let count = 0;
  if (check(m, n, k, i, j, visited)) {
    visited[i * n + j] = true;
    count =
      1 +
      dfs(m, n, k, i + 1, j, visited) +
      dfs(m, n, k, i - 1, j, visited) +
      dfs(m, n, k, i, j + 1, visited) +
      dfs(m, n, k, i, j - 1, visited);
  }
  return count;
}

function check(m, n, k, i, j, visited) {
  return i >= 0 && i < m && j >= 0 && j < n && getDigitSum(i) + getDigitSum(j) <= k && !visited[i * n + j];
}

function getDigitSum(num) {
  let sum = 0;
  while (num !== 0) {
    sum += num % 10;
    num = Math.floor(num / 10);
  }
  return sum;
}
