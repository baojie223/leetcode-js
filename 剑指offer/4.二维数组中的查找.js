/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var findNumberIn2DArray = function (matrix, target) {
  // 右上角标准数法，时间：O(m * n)，空间：O(1)
  if (matrix.length === 0) return false;
  const rows = matrix.length,
    columns = matrix[0].length;
  let row = 0,
    column = columns - 1;
  while (row < rows && column >= 0) {
    const curr = matrix[row][column];
    if (curr > target) {
      column--;
    } else if (curr < target) {
      row++;
    } else {
      return true;
    }
  }
  return false;
};
