/*
 * @lc app=leetcode.cn id=118 lang=javascript
 *
 * [118] 杨辉三角
 */

// @lc code=start
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
  let triangle = [[1], [1, 1], [1, 2, 1]]
  if (numRows < 4) {
    return triangle.slice(0, numRows)
  }
  for (let i = 3; i < numRows; i++) {
    let row = []
    row[0] = 1
    const prevRow = triangle[i - 1]
    for (let j = 0; j < prevRow.length - 1; j++) {
      row.push(prevRow[j] + prevRow[j + 1])
    }
    row.push(1)
    triangle.push(row)
  }
  return triangle
}
// @lc code=end
