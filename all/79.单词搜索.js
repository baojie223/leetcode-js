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
      if (backtrack(board, i, j, word, 0)) return true
    }
  }
  return false

  function backtrack(board, i, j, word, p) {
    if (i < 0 || i >= m || j < 0 || j >= n || board[i][j] !== word[p] || board[i][j] === '#') return false
    if (p === word.length - 1) return true
    const t = board[i][j]
    board[i][j] = '#'
    if (backtrack(board, i, j - 1, word, p + 1)) return true
    if (backtrack(board, i, j + 1, word, p + 1)) return true
    if (backtrack(board, i - 1, j, word, p + 1)) return true
    if (backtrack(board, i + 1, j, word, p + 1)) return true
    board[i][j] = t
    return false
  }
}

// @lc code=end

exist(
  [
    ['A', 'B', 'C', 'E'],
    ['S', 'F', 'C', 'S'],
    ['A', 'D', 'E', 'E'],
  ],
  'SEE'
)
