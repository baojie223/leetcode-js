/*
 * @lc app=leetcode.cn id=67 lang=javascript
 *
 * [67] 二进制求和
 */

// @lc code=start
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
  const numA = BigInt(`0b${a}`)
  const numB = BigInt(`0b${b}`)
  let res = numA + numB
  return res.toString(2)
}
// @lc code=end
