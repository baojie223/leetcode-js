/*
 * @lc app=leetcode.cn id=85 lang=javascript
 *
 * [85] 最大矩形
 */

// @lc code=start
/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalRectangle = function (matrix) {
  if (!matrix.length) return 0
  const n = matrix[0].length
  let maxArea = 0,
    h = new Array(n).fill(0)
  for (let row of matrix) {
    for (let i = 0; i < row.length; i++) {
      if (row[i] === '1') h[i] += 1
      else h[i] = 0
    }
    maxArea = Math.max(largestRectangleArea(h), maxArea)
  }
  return maxArea
}

function largestRectangleArea(heights) {
  const stack = []
  heights = [0, ...heights, 0]
  let ans = 0
  for (let i = 0; i < heights.length; i++) {
    while (stack.length && heights[stack[stack.length - 1]] > heights[i]) {
      const tmp = stack.pop()
      ans = Math.max(ans, heights[tmp] * (i - stack[stack.length - 1] - 1))
    }
    stack.push(i)
  }
  return ans
}
// @lc code=end

maximalRectangle([
  ['1', '0', '1', '0', '0'],
  ['1', '0', '1', '1', '1'],
  ['1', '1', '1', '1', '1'],
  ['1', '0', '0', '1', '0'],
])
