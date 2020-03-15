/*
 * @lc app=leetcode.cn id=299 lang=javascript
 *
 * [299] 猜数字游戏
 */

// @lc code=start
/**
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */
var getHint = function(secret, guess) {
  let left = 1
  let right = secret
  let mid
  while (left <= right) {
    mid = Math.floor((left + right) / 2)
  }
}
// @lc code=end
