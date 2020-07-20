/*
 * @lc app=leetcode.cn id=312 lang=javascript
 *
 * [312] 戳气球
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxCoins = function (nums) {
  // 动态规划, 转移方程: dp[i][j] = max(dp[i][k - 1] + nums[k - 1] * nums[k] * nums[k + 1] + dp[k + 1, j], ...)
  const vals = [1, ...nums, 1];
  const visited = Array(vals.length)
    .fill('')
    .map(() => Array(vals.length).fill(''));
  return dp(vals, 0, vals.length - 1, visited);
};

function dp(nums, i, j, visited) {
  if (i >= j - 1) return 0;
  if (visited[i][j]) return visited[i][j];
  let max = 0;
  for (let k = i + 1; k < j; k++) {
    const val = dp(nums, i, k, visited) + nums[i] * nums[k] * nums[j] + dp(nums, k, j, visited);
    if (val > max) max = val;
  }
  visited[i][j] = max;
  return max;
}

// @lc code=end

maxCoins([3, 1, 5, 8]);
