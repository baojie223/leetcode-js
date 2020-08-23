/*
 * @lc app=leetcode.cn id=201 lang=javascript
 *
 * [201] 数字范围按位与
 */

// @lc code=start
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
// 本质是求二进制字符串的最长前缀
var rangeBitwiseAnd = function (m, n) {
  // Brian Kernighan 算法
  // while (m < n) {
  //   n &= n - 1
  // }
  // return n

  // 右移至两数相等, 再左移并补零
  let shift = 0
  while (m !== n) {
    m >>= 1
    n >>= 1
    shift++
  }
  return m << shift
}
// @lc code=end
