/*
 * @lc app=leetcode.cn id=383 lang=javascript
 *
 * [383] 赎金信
 */

// @lc code=start
/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
  for (let i = 0; i < ransomNote.length; i++) {
    const index = magazine.indexOf(ransomNote[i])
    if (index === -1) {
      return false
    } else {
      magazine = magazine.replace(ransomNote[i], 0)
    }
  }
  return true
}
// @lc code=end
