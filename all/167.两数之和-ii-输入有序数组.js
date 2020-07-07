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
var twoSum = function(numbers, target) {
  // solution no.1
  // for (let i = 0; i < numbers.length; i ++) {
  //   for (let j = i + 1; j < numbers.length; j++) {
  //     if (numbers[i] + numbers[j] === target) {
  //       return [i + 1, j + 1]
  //     }
  //   }
  // }
  // return [0, 0]

  // solution no.2
  let i = 0
  let j = numbers.length - 1
  while (i < j) {
    if (numbers[i] + numbers[j] === target) {
      return [i + 1, j + 1]
    }
    if (numbers[i] + numbers[j] < target) {
      i++
      continue
    }
    if (numbers[i] + numbers[j] > target) {
      j--
      continue
    }
  }
  return [0, 0]
};
// @lc code=end

