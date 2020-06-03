/*
 * @lc app=leetcode.cn id=37 lang=javascript
 *
 * [37] 解数独
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function (board) {
  backtrack(board, 0, 0)
}

function backtrack(board, row, col) {
  for (let i = row; i < 9; i++, col = 0) {
    for (let j = col; j < 9; j++) {
      const char = board[i][j]
      if (char !== '.') continue
      for (let k = 1; k <= 9; k++) {
        if (isValid(board, i, j, String(k))) {
          board[i][j] = String(k)
          if (backtrack(board, i, j + 1)) {
            return true
          }
          board[i][j] = '.'
        }
      }
      return false
    }
  }
  return true
}

function isValid(board, row, col, char) {
  for (let i = 0; i < 9; i++) {
    if (board[i][col] === char || board[row][i] === char) {
      return false
    }
  }

  const rowStart = Math.floor(row / 3) * 3
  const colStart = Math.floor(col / 3) * 3
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      const c = board[rowStart + i][colStart + j]
      if (c === char) {
        return false
      }
    }
  }
  return true
}
// @lc code=end
