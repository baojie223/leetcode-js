/*
 * @lc app=leetcode.cn id=167 lang=javascript
 *
 * [167] 两数之和 II - 输入有序数组
 */

// @lc code=start
/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
  // 暴力法
  // for (let i = 0; i < numbers.length; i ++) {
  //   for (let j = i + 1; j < numbers.length; j++) {
  //     if (numbers[i] + numbers[j] === target) {
  //       return [i + 1, j + 1]
  //     }
  //   }
  // }
  // return [0, 0]

  // 双指针, 时间O(n), 空间O(1)
  let i = 0,
    j = numbers.length - 1;
  while (i < j) {
    if (numbers[i] + numbers[j] < target) {
      i++;
    } else if (numbers[i] + numbers[j] > target) {
      j--;
    } else if (numbers[i] + numbers[j] === target) {
      return [i + 1, j + 1];
    }
  }
};
// @lc code=end
