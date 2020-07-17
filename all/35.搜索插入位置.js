/*
 * @lc app=leetcode.cn id=35 lang=javascript
 *
 * [35] 搜索插入位置
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// 递归的二分法
// var searchInsert = function (nums, target) {
//   return search(nums, 0, nums.length - 1, target);
// };

// function search(nums, low, high, target) {
//   if (low > high) {
//     return low;
//   }
//   const mid = Math.floor(low + (high - low) / 2);
//   if (nums[mid] > target) {
//     return search(nums, low, mid - 1, target);
//   } else if (nums[mid] < target) {
//     return search(nums, mid + 1, high, target);
//   } else if (nums[mid] === target) {
//     return mid;
//   }
// }

var searchInsert = function (nums, target) {
  let i = 0,
    j = nums.length - 1;
  while (i <= j) {
    const mid = Math.floor(i + (j - i) / 2);
    if (nums[mid] > target) {
      j = mid - 1;
    } else if (nums[mid] < target) {
      i = mid + 1;
    } else if (nums[mid] === target) {
      return mid;
    }
  }
  return i;
};

// searchInsert([1, 3, 5, 6], 5);
