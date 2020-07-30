/*
 * @lc app=leetcode.cn id=16 lang=javascript
 *
 * [16] 最接近的三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
  // 暴力法, 时间O(n3)
  // const n = nums.length
  // let min = Number.MAX_SAFE_INTEGER
  // let curr = 0
  // for (let i = 0; i < n; i++) {
  //   for (let j = i + 1; j < n; j++) {
  //     for (let k = j + 1; k < n; k++) {
  //       curr = Math.abs(nums[i] + nums[j] + nums[k] - target)
  //       if (curr < min) {
  //         min = curr
  //         ans = nums[i] + nums[j] + nums[k]
  //       }
  //     }
  //   }
  // }
  // return ans

  // 排序加双指针, 时间O(n2)
  nums.sort((a, b) => (a - b > 0 ? 1 : -1))
  const n = nums.length
  let sum = 0,
    min = Number.MAX_SAFE_INTEGER,
    ans = 0
  for (let i = 0; i <= n - 3; i++) {
    let j = i + 1,
      k = n - 1
    while (j < k) {
      sum = nums[i] + nums[j] + nums[k]
      if (Math.abs(sum - target) < min) {
        min = Math.abs(sum - target)
        ans = sum
      }
      if (sum > target) {
        k--
      } else if (sum < target) {
        j++
      } else {
        return target
      }
    }
  }
  return ans
}
// @lc code=end

threeSumClosest([1, 2, 5, 10, 11], 12) // 13
