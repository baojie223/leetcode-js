/*
 * @lc app=leetcode.cn id=45 lang=javascript
 *
 * [45] 跳跃游戏 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
  // 真正的贪心
  const n = nums.length
  let start = 0, end = 1, ans = 0
  while (end < n) {
    let max = 0
    for (let i = start; i < end; i++) {
      max = Math.max(max, nums[i] + i)
    }
    start = end
    end = max + 1
    ans++
  }
  return ans

  // 贪心, 类似bfs, 还是超时
  // const n = nums.length
  // if (n === 1) return 0
  // const queue = []
  // queue.push([0, nums[0], 1])
  // while (queue.length) {
  //   const [index, value, count] = queue.shift()
  //   if (index + value >= n - 1) return count
  //   for (let i = index + 1; i <= index + value; i++) {
  //     queue.push([i, nums[i], count + 1])
  //   }
  // }

  // 动态规划最后一个测试用例超时
  // const n = nums.length
  // const dp = []
  // dp[0] = 0
  // for (let i = 1; i < n; i++) {
  //   dp[i] = Infinity
  //   for (let j = i - 1; j >= 0; j--) {
  //     if (j + nums[j] >= i) {
  //       dp[i] = Math.min(dp[i], dp[j] + 1)
  //     }
  //   }
  // }
  // return dp[n - 1]
}
// @lc code=end

jump([2, 3, 1, 1, 4]) // 2
