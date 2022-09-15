/*
 * @lc app=leetcode.cn id=672 lang=javascript
 *
 * [672] 灯泡开关 Ⅱ
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} presses
 * @return {number}
 */
var flipLights = function (n, presses) {
  if (presses == 0) return 1
  if (n == 1) return 2
  else if (n == 2) return presses == 1 ? 3 : 4;
  else return presses == 1 ? 4 : presses == 2 ? 7 : 8;
}
// @lc code=end

flipLights(2, 1)