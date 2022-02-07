/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 *
 * https://leetcode-cn.com/problems/3sum/description/
 *
 * algorithms
 * Medium (25.95%)
 * Likes:    1902
 * Dislikes: 0
 * Total Accepted:    175.7K
 * Total Submissions: 676.1K
 * Testcase Example:  '[-1,0,1,2,-1,-4]'
 *
 * 给你一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0
 * ？请你找出所有满足条件且不重复的三元组。
 *
 * 注意：答案中不可以包含重复的三元组。
 *
 *
 *
 * 示例：
 *
 * 给定数组 nums = [-1, 0, 1, 2, -1, -4]，
 *
 * 满足要求的三元组集合为：
 * [
 * ⁠ [-1, 0, 1],
 * ⁠ [-1, -1, 2]
 * ]
 *
 *
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */

// var threeSum = function(nums) {
//   // 1. 三层循环暴力破解
//   // const res = []
//   // for (let i = 0; i < nums.length - 2; ++i) {
//   //   const target = -nums[i]
//   //   for (let j = i + 1; j < nums.length - 1; ++j) {
//   //     for (let k = j + 1; k < nums.length; ++k) {
//   //       if (nums[j] + nums[k] === target) {
//   //         res.push([nums[i], nums[j], nums[k]])
//   //       }
//   //     }
//   //   }
//   // }
//   // return res

//   // 2. 排序加双指针
//   if (nums.length < 3) return []
//   const res = []
//   const sortedNums = nums.sort((a, b) => a - b)
//   for (let i = 0; i < nums.length; i++) {
//     if (sortedNums[i] > 0) {
//       break
//     }
//     if (i > 0 && sortedNums[i] === sortedNums[i - 1]) {
//       continue
//     }

//     let j = i + 1
//     let k = nums.length - 1
//     while (j < k) {
//       if (sortedNums[i] + sortedNums[j] + sortedNums[k] === 0) {
//         res.push([sortedNums[i], sortedNums[j], sortedNums[k]])
//         while (sortedNums[j] === sortedNums[j + 1]) {
//           j++
//         }
//         while (sortedNums[k] === sortedNums[k - 1]) {
//           k--
//         }
//         j++
//         k--
//       } else if (sortedNums[i] + sortedNums[j] + sortedNums[k] > 0) {
//         k--
//       } else {
//         j++
//       }
//     }
//   }
//   return res
// }

// 20211222
function threeSum(nums) {
  const n = nums.length
  nums.sort((a, b) => a - b)
  if (nums[0] > 0 || nums[n - 1] < 0) {
    return []
  }
  const res = []
  for (let i = 0; i < n; i++) {
    if (nums[i] > 0) {
      break
    }
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue
    }
    let l = i + 1,
      r = n - 1
    while (l < r) {
      if (nums[i] + nums[l] + nums[r] < 0) {
        l++
      } else if (nums[i] + nums[l] + nums[r] > 0) {
        r--
      } else {
        res.push([nums[i], nums[l], nums[r]])
        while (l < r && nums[l] === nums[l + 1]) {
          l++
        }
        while (l < r && nums[r] === nums[r - 1]) {
          r--
        }
        l++
        r--
      }
    }
  }
  return res
}

// @lc code=end

// console.log(threeSum([-1, 0, 1, 2, -1, -4]))
