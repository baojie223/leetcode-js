/*
 * @lc app=leetcode.cn id=66 lang=javascript
 *
 * [66] 加一
 */

// @lc code=start
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
  let temp = Object.assign([], digits)
  const len = temp.length
  temp[len - 1] += 1
  for (let i = len - 1; i > 0; i--) {
    if (temp[i] === 10) {
      temp[i] = 0
      temp[i - 1] += 1
    } else {
      return temp
    }
  }
  if (temp[0] === 10) {
    temp[0] = 0
    temp.unshift(1)
  }
  return temp
}
// @lc code=end
