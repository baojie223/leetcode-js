/*
 * @lc app=leetcode.cn id=52 lang=javascript
 *
 * [52] N皇后 II
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
// 位运算为最佳, 但不会
var totalNQueens = function (n) {
  const board = new Array(n).fill(null).map(() => new Array(n).fill('.'))
  let count = 0
  backtrack(board, 0)
  return count

  function backtrack(board, i) {
    if (i === n) {
      count++
      return
    }
    for (let j = 0; j < n; j++) {
      if (!isValid(board, i, j)) continue
      board[i][j] = 'Q'
      backtrack(board, i + 1)
      board[i][j] = '.'
    }
  }

  function isValid(board, i, j) {
    for (let k = 0; k < n; k++) {
      if (board[k][j] === 'Q' || board[i][k] === 'Q') return false
    }
    for (let k = 1; k < n && i - k >= 0 && j - k >= 0; k++) {
      if (board[i - k][j - k] === 'Q') return false
    }
    for (let k = 1; k < n && i + k < n && j - k >= 0; k++) {
      if (board[i + k][j - k] === 'Q') return false
    }
    for (let k = 1; k < n && i - k >= 0 && j + k < n; k++) {
      if (board[i - k][j + k] === 'Q') return false
    }
    for (let k = 1; k < n && i + k < n && j + k < n; k++) {
      if (board[i + k][j + k] === 'Q') return false
    }
    return true
  }
}

// @lc code=end

totalNQueens(4)
