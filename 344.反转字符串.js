/*
 * @lc app=leetcode.cn id=344 lang=javascript
 *
 * [344] 反转字符串
 */

// @lc code=start
/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
  // 太low了
  // s.reverse()
  // return s
  let temp
  for (let i = 0; i < Math.floor(s.length / 2); i++) {
    temp = s[i]
    s[i] = s[s.length - 1 - i]
    s[s.length - 1 - i] = temp
  }
}
// @lc code=end
