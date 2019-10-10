/*
 * @lc app=leetcode.cn id=119 lang=javascript
 *
 * [119] 杨辉三角 II
 */

// @lc code=start
/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
  let numRows = rowIndex + 1
  let triangle = [[1], [1, 1], [1, 2, 1]]
  if (numRows < 4) {
    triangle = triangle.slice(0, numRows)
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
  return triangle[rowIndex]
}
// @lc code=end

getRow(1)
