/*
 * @lc app=leetcode.cn id=36 lang=javascript
 *
 * [36] 有效的数独
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
  return backtrack(board, 0)
}

function backtrack(board, row) {
  if (row === 9) {
    return true
  }
  for (let col = 0; col < 9; col++) {
    if (board[row][col] === '.') continue

    if (!isValid(board, row, col)) {
      return false
    }
  }
  return backtrack(board, row + 1)
}

function isValid(board, row, col) {
  const char = board[row][col]
  for (let i = 0; i < 9; i++) {
    if (i === row) continue
    if (board[i][col] === char) {
      return false
    }
  }
  for (let i = 0; i < 9; i++) {
    if (i === col) continue
    if (board[row][i] === char) {
      return false
    }
  }
  const rowStart = Math.floor(row / 3) * 3
  const colStart = Math.floor(col / 3) * 3

  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (rowStart + i === row && colStart + j === col) continue
      if (board[rowStart + i][colStart + j] === char) {
        return false
      }
    }
  }
  return true
}
// @lc code=end

// isValidSudoku([
//   ['5', '3', '.', '.', '7', '.', '.', '.', '.'],
//   ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
//   ['.', '9', '8', '.', '.', '.', '.', '6', '.'],
//   ['8', '.', '.', '.', '6', '.', '.', '.', '3'],
//   ['4', '.', '.', '8', '.', '3', '.', '.', '1'],
//   ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
//   ['.', '6', '.', '.', '.', '.', '2', '8', '.'],
//   ['.', '.', '.', '4', '1', '9', '.', '.', '5'],
//   ['.', '.', '.', '.', '8', '.', '.', '7', '9'],
// ])
