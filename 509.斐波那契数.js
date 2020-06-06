/*
 * @lc app=leetcode.cn id=509 lang=javascript
 *
 * [509] 斐波那契数
 */

// @lc code=start
/**
 * @param {number} N
 * @return {number}
 */
var fib = function (N) {
  if (N < 2) return N
  let pre = 0,
    curr = 1
  for (let i = 2; i < N; i++) {
    const temp = curr
    curr = pre + curr
    pre = temp
  }
  return curr + pre
}
// @lc code=end
