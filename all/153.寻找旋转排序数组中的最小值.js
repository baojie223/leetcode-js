/*
 * @lc app=leetcode.cn id=153 lang=javascript
 *
 * [153] 寻找旋转排序数组中的最小值
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
// var findMin = function(nums) {
//   if (nums[0] <= nums[nums.length - 1]) {
//     return nums[0]
//   }
//   let left = 0
//   let right = nums.length - 1
//   let mid
//   while (left < right) {
//     mid = Math.floor((left + right) / 2)
//     if (nums[mid] >= nums[0]) {
//       left = mid + 1
//       continue
//     }
//     if (nums[mid] <= nums[nums.length - 1]) {
//       right = mid
//       continue
//     }
//   }
//   return nums[left]
// }

// 20211220
function findMin(nums) {
  let l = 0,
    r = nums.length - 1
  while (l < r) {
    const mid = l + ((r - l) >> 1)
    if (nums[mid] < nums[r]) {
      r = mid
    } else {
      l = mid + 1
    }
  }
  return nums[l]
}
// @lc code=end

findMin([3, 4, 5, 1, 2])
