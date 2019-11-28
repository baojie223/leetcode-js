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
  const last = arr[arr.length - 1].trim()
  return !s.length ? 0 : !last ? s.length : last.length
}
// @lc code=end
