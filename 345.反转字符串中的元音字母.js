/*
 * @lc app=leetcode.cn id=345 lang=javascript
 *
 * [345] 反转字符串中的元音字母
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
  let list = []
  s.replace(/[aeiou]{1}/ig, match => {
    list.push(match)
    return match
  })
  const str = s.replace(/[aeiou]{1}/ig, () => {
    return list.pop()
  })
  return str
}
// @lc code=end
