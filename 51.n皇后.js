/*
 * @lc app=leetcode.cn id=51 lang=javascript
 *
 * [51] N皇后
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function (n) {
  const res = []
  const board = Array(n).fill('.'.repeat(n))
  backtrack(board, 0, res)
  return res
}

function backtrack(board, row, res) {
  if (row === board.length) {
    res.push([...board])
    return
  }
  const n = board[row].length
  for (let col = 0; col < n; col++) {
    if (!isValid(board, row, col)) continue

    board[row] = '.'.repeat(col) + 'Q' + '.'.repeat(n - col - 1)
    backtrack(board, row + 1, res)
    board[row] = '.'.repeat(n)
  }
}

function isValid(board, row, col) {
  const n = board.length
  for (let i = 0; i < n; i++) {
    if (board[i][col] === 'Q') {
      return false
    }
  }
  for (let i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
    if (board[i][j] === 'Q') {
      return false
    }
  }
  for (let i = row - 1, j = col + 1; i >= 0 && j < n; i--, j++) {
    if (board[i][j] === 'Q') {
      return false
    }
  }
  return true
}
// @lc code=end
