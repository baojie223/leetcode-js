/*
 * @lc app=leetcode.cn id=79 lang=javascript
 *
 * [79] 单词搜索
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
  const m = board.length,
    n = board[0].length
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      const bool = backtrack(board, i, j, word, 0, m, n)
      if (bool) return true
    }
  }
  return false
}

function backtrack(board, i, j, word, k, m, n) {
  if (k >= word.length) return true
  
  if (i < 0 || i >= m || j < 0 || j >= n || board[i][j] === '#' || board[i][j] !== word[k]) return false

  const t = board[i][j]

  board[i][j] = '#'

  if (backtrack(board, i - 1, j, word, k + 1, m, n)) return true
  if (backtrack(board, i + 1, j, word, k + 1, m, n)) return true
  if (backtrack(board, i, j - 1, word, k + 1, m, n)) return true
  if (backtrack(board, i, j + 1, word, k + 1, m, n)) return true

  board[i][j] = t

  return false
}
// @lc code=end

exist(
  [
    ['C', 'A', 'A'],
    ['A', 'A', 'A'],
    ['B', 'C', 'D'],
  ],
  'AAB'
)
