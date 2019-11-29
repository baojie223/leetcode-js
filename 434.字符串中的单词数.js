/*
 * @lc app=leetcode.cn id=434 lang=javascript
 *
 * [434] 字符串中的单词数
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var countSegments = function(s) {
  const str = s.match(/[\S]+/g)
  return !str && typeof str === 'object' ? 0 : str.length
}
// @lc code=end
