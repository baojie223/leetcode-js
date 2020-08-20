/*
 * @lc app=leetcode.cn id=529 lang=javascript
 *
 * [529] 扫雷游戏
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @param {number[]} click
 * @return {character[][]}
 */
var updateBoard = function (board, click) {
  const m = board.length,
    n = board[0].length
  dfs(board, click[0], click[1], m, n)
  return board
}

function dfs(board, row, col, m, n) {
  if (row < 0 || row >= m || col < 0 || col >= n) return

  const c = board[row][col]

  if (c === 'B' || (c >= '1' && c <= '9')) return

  if (c === 'M') {
    board[row][col] = 'X'
    return
  }

  const count = check(board, row, col, m, n)

  if (count > 0) {
    board[row][col] = String(count)
    return
  }

  board[row][col] = 'B'

  dfs(board, row - 1, col - 1, m, n)
  dfs(board, row - 1, col, m, n)
  dfs(board, row - 1, col + 1, m, n)
  dfs(board, row, col - 1, m, n)
  dfs(board, row, col + 1, m, n)
  dfs(board, row + 1, col - 1, m, n)
  dfs(board, row + 1, col, m, n)
  dfs(board, row + 1, col + 1, m, n)
}

function check(board, row, col, m, n) {
  return (
    isBomb(board, row - 1, col - 1, m, n) +
    isBomb(board, row - 1, col, m, n) +
    isBomb(board, row - 1, col + 1, m, n) +
    isBomb(board, row, col - 1, m, n) +
    isBomb(board, row, col + 1, m, n) +
    isBomb(board, row + 1, col - 1, m, n) +
    isBomb(board, row + 1, col, m, n) +
    isBomb(board, row + 1, col + 1, m, n)
  )
}

function isBomb(board, row, col, m, n) {
  if (row < 0 || row >= m || col < 0 || col >= n) return 0
  return board[row][col] === 'M' ? 1 : 0
}
// @lc code=end

updateBoard(
  [
    ['E', 'E', 'E', 'E', 'E'],
    ['E', 'E', 'M', 'E', 'E'],
    ['E', 'E', 'E', 'E', 'E'],
    ['E', 'E', 'E', 'E', 'E'],
  ],
  [3, 0]
)
