/*
 * @lc app=leetcode.cn id=18 lang=javascript
 *
 * [18] 四数之和
 *
 * https://leetcode-cn.com/problems/4sum/description/
 *
 * algorithms
 * Medium (37.38%)
 * Likes:    431
 * Dislikes: 0
 * Total Accepted:    69.8K
 * Total Submissions: 186.4K
 * Testcase Example:  '[1,0,-1,0,-2,2]\n0'
 *
 * 给定一个包含 n 个整数的数组 nums 和一个目标值 target，判断 nums 中是否存在四个元素 a，b，c 和 d ，使得 a + b + c
 * + d 的值与 target 相等？找出所有满足条件且不重复的四元组。
 *
 * 注意：
 *
 * 答案中不可以包含重复的四元组。
 *
 * 示例：
 *
 * 给定数组 nums = [1, 0, -1, 0, -2, 2]，和 target = 0。
 *
 * 满足要求的四元组集合为：
 * [
 * ⁠ [-1,  0, 0, 1],
 * ⁠ [-2, -1, 1, 2],
 * ⁠ [-2,  0, 0, 2]
 * ]
 *
 *
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {
  let res = []
  for (let i = 0; i < nums.length; i++) {
    const nextSums = nums.slice(i + 1)
    const arr = threeSum(nextSums, target - nums[i])
    res = res.concat(arr.map((item) => [nums[i], ...item]))
  }
  res.forEach((item) => {
    item.sort()
  })
  return Array.from(
    new Set(res.map((item) => JSON.stringify(item)))
  ).map((item) => JSON.parse(item))
  // return res
}

function threeSum(nums, target) {
  let res = []
  for (let i = 0; i < nums.length; i++) {
    const nextSums = nums.slice(i + 1)
    const arr = twoSum(nextSums, target - nums[i])
    res = res.concat(arr.map((item) => [nums[i], ...item]))
  }
  return res
}
function twoSum(nums, target) {
  let res = []
  for (let i = 0; i < nums.length; i++) {
    const nextSums = nums.slice(i + 1)
    const arr = oneSum(nextSums, target - nums[i])
    res = res.concat(arr.map((item) => [nums[i], ...item]))
  }
  return res
}
function oneSum(nums, target) {
  let res = []
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target) {
      res.push([nums[i]])
    }
  }
  return res
}
// @lc code=end
