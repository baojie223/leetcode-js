/*
 * @lc app=leetcode.cn id=53 lang=javascript
 *
 * [53] 最大子序和
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  const dp = new Array(nums.length).fill(-Infinity)
  for (let i = 0; i < nums.length; i++) {
    if (i === 0) {
      dp[0] = nums[0]
      continue
    }
    dp[i] = Math.max(dp[i - 1] + nums[i], nums[i])
  }
  let res = -Infinity
  for (let sum of dp) {
    res = Math.max(res, sum)
  }
  return res

  // const dp = []
  // dp[0] = nums[0]
  // let max = dp[0]
  // // const max = arr => {
  // //   let m = arr[0]
  // //   for (let i = 0; i < arr.length; i++) {
  // //     if (arr[i] > m) {
  // //       m = arr[i]
  // //     }
  // //   }
  // //   return m
  // // }
  // for (let i = 1; i < nums.length; i++) {
  //   if (dp[i - 1] <= 0) {
  //     dp[i] = nums[i]
  //   } else {
  //     dp[i] = dp[i - 1] + nums[i]
  //   }
  //   if (dp[i] > max) {
  //     max = dp[i]
  //   }
  // }
  // return max
}
