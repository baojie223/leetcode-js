/*
 * @lc app=leetcode.cn id=941 lang=javascript
 *
 * [941] 有效的山脉数组
 */

// @lc code=start
/**
 * @param {number[]} A
 * @return {boolean}
 */
var validMountainArray = function(A) {
  let top = []
  if (A[0] > A[1]) {
    return false
  }
  if (A[A.length - 1] > A[A.length - 2]) {
    return false
  }
  for (let i = 1; i < A.length - 1; i++) {
    if (A[i] === A[i + 1] || A[i] === A[i - 1]) {
      return false
    }
    if (A[i] > A[i - 1] && A[i] > A[i + 1]) {
      top.push(i)
    }
  }
  if (top.length === 1) {
    return true
  } else {
    return false
  }
}
// @lc code=end
