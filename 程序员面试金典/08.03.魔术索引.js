/**
 * @param {number[]} nums
 * @return {number}
 */
var findMagicIndex = function (nums) {
  // 朴素遍历
  // for (let i = 0; i < nums.length; i++) {
  //   if (nums[i] === i) return i
  // }
  // return -1

  // 优化
  let i = 0
  while (i < nums.length) {
    if (nums[i] === i) {
      return i
    } else if (nums[i] > i) {
      i = nums[i]
    } else {
      i++
    }
  }
  return -1
}
