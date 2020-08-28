/*
 * @lc app=leetcode.cn id=657 lang=javascript
 *
 * [657] 机器人能否返回原点
 */

// @lc code=start
/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function (moves) {
  const dict = { U: 0, D: 0, L: 0, R: 0 }
  for (const move of moves) dict[move]++
  return dict.U === dict.D && dict.L === dict.R
}
// @lc code=end
