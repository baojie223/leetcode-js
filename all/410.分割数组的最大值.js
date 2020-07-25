/*
 * @lc app=leetcode.cn id=410 lang=javascript
 *
 * [410] 分割数组的最大值
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} m
 * @return {number}
 */
var splitArray = function (nums, m) {
  // 动态规划
  // const n = nums.length
  // const dp = Array(n + 1)
  //   .fill(null)
  //   .map(() => Array(m + 1).fill(Infinity))
  // const sum = [0]
  // for (let i = 1; i <= n; i++) {
  //   sum[i] = sum[i - 1] + nums[i - 1]
  // }
  // for (let i = 1; i <= n; i++) {
  //   for (let j = 1; j <= Math.min(i, m); j++) {
  //     if (j === 1) {
  //       dp[i][j] = sum[i]
  //     } else {
  //       for (let k = 1; k < i; k++) {
  //         dp[i][j] = Math.min(dp[i][j], Math.max(dp[k][j - 1], sum[i] - sum[k]))
  //       }
  //     }
  //   }
  // }
  // return dp[n][m]

  // 二分法, 自己找出单调性
  let l = 0,
    r = 0,
    mid = 0
  for (let num of nums) {
    if (num > l) l = num
    r += num
  }
  while (l < r) {
    mid = Math.floor(l + (r - l) / 2)
    if (check(nums, m, mid)) {
      r = mid
    } else {
      l = mid + 1
    }
  }
  return l
}

function check(nums, m, target) {
  let count = 1,
    sum = 0
  for (let num of nums) {
    if (sum + num <= target) {
      sum += num
    } else {
      sum = num
      count++
    }
  }
  return count <= m
}
// @lc code=end

splitArray([7, 2, 5, 10, 8], 2)