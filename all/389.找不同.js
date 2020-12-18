/*
 * @lc app=leetcode.cn id=389 lang=javascript
 *
 * [389] 找不同
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function (s, t) {
  // 位运算
  let c = 0
  for (let char of s + t) {
    c ^= char.charCodeAt(0)
  }
  return String.fromCharCode(c)

  // 排序法
  // const sArray = s.split('').sort((a, b) => a.charCodeAt(0) - b.charCodeAt(0))
  // const tArray = t.split('').sort((a, b) => a.charCodeAt(0) - b.charCodeAt(0))

  // for (let i = 0; i < tArray.length; i++) {
  //   if (sArray[i] !== tArray[i]) return tArray[i]
  // }
}
// @lc code=end
