/*
 * @lc app=leetcode.cn id=69 lang=javascript
 *
 * [69] x 的平方根
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
  let left = 1
  let right = x
  let mid
  while (left <= right) {
    mid = Math.floor((left + right) / 2)
    if (Math.pow(mid, 2) < x) {
      left = mid + 1
      continue
    }
    if (Math.pow(mid, 2) > x) {
      right = mid - 1
      continue
    }
    if (Math.pow(mid, 2) === x) {
      return mid
    }
  }
  return Math.min(left, right)
}
// console.log(mySqrt(6))
// @lc code=end

