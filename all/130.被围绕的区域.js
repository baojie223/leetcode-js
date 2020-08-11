/*
 * @lc app=leetcode.cn id=130 lang=javascript
 *
 * [130] 被围绕的区域
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function (board) {
  if (!board.length) return
  const m = board.length,
    n = board[0].length
  const di = [-1, 1, 0, 0],
    dj = [0, 0, -1, 1]
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (i !== 0 && j !== 0 && i !== m - 1 && j !== n - 1) continue
      dfs(board, i, j)
    }
  }
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (board[i][j] === 'O') {
        board[i][j] = 'X'
      } else if (board[i][j] === '#') {
        board[i][j] = 'O'
      }
    }
  }
  function dfs(board, i, j) {
    if (i < 0 || i >= m || j < 0 || j >= n || board[i][j] !== 'O') return
    board[i][j] = '#'
    let x, y
    for (let k = 0; k < 4; k++) {
      x = i + di[k]
      y = j + dj[k]
      dfs(board, x, y)
    }
  }
}

// @lc code=end
solve([
  ['X', 'X', 'X', 'X'],
  ['X', 'O', 'O', 'X'],
  ['X', 'X', 'O', 'X'],
  ['X', 'O', 'X', 'X'],
])
