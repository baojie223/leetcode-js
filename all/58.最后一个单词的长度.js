/*
 * @lc app=leetcode.cn id=58 lang=javascript
 *
 * [58] 最后一个单词的长度
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
  const arr = s.match(/\s\w+/g)
  return !arr ? s.trim().length : arr[arr.length - 1].trim().length
}
// @lc code=end
