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
  // solution no.1 太low了 
  // s.reverse()
  // return s

  // solution no.2
  // let temp
  // for (let i = 0; i < Math.floor(s.length / 2); i++) {
  //   temp = s[i]
  //   s[i] = s[s.length - 1 - i]
  //   s[s.length - 1 - i] = temp
  // }

  // solution no.3 双指针
  let i = 0
  let j = s.length - 1
  let temp
  while (i < j) {
    temp = s[i]
    s[i] = s[j]
    s[j] = temp
    i++
    j--
  }
}
// @lc code=end
