/*
 * @lc app=leetcode.cn id=546 lang=javascript
 *
 * [546] 移除盒子
 */

// @lc code=start
/**
 * @param {number[]} boxes
 * @return {number}
 */
var removeBoxes = function (boxes) {
  const memo = new Array(100).fill(null).map(() => new Array(100).fill(null).map(() => new Array(100).fill(0)))
  return dp(boxes, 0, boxes.length - 1, 0, memo)
}

function dp(boxes, l, r, k, memo) {
  if (l > r) return 0
  if (memo[l][r][k] !== 0) return memo[l][r][k]
  memo[l][r][k] = dp(boxes, l, r - 1, 0, memo) + (k + 1) * (k + 1)
  for (let i = l; i <= r - 1; i++) {
    if (boxes[i] === boxes[r]) {
      memo[l][r][k] = Math.max(memo[l][r][k], dp(boxes, l, i, k + 1, memo) + dp(boxes, i + 1, r - 1, 0, memo))
    }
  }                                  
  return memo[l][r][k]
}
// @lc code=end                    
