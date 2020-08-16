/*
 * @lc app=leetcode.cn id=733 lang=javascript
 *
 * [733] 图像渲染
 */

// @lc code=start
/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
var floodFill = function (image, sr, sc, newColor) {
  const m = image.length,
    n = image[0].length
  const di = [1, -1, 0, 0],
    dj = [0, 0, 1, -1]
  const color = image[sr][sc]
  dfs(image, sr, sc, color, newColor)
  return image
  function dfs(image, sr, sc, color, newColor) {
    if (sr < 0 || sr >= m || sc < 0 || sc >= n) return
    const currColor = image[sr][sc]
    if (currColor !== color) return
    if (currColor === newColor) return
    image[sr][sc] = newColor
    for (let k = 0; k < 4; k++) {
      dfs(image, sr + di[k], sc + dj[k], color, newColor)
    }
  }
}
// @lc code=end

floodFill(
  [
    [1, 1, 1],
    [1, 1, 0],
    [1, 0, 1],
  ],
  1,
  1,
  2
)
