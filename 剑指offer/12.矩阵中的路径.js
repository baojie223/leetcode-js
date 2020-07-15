/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      if (dfs(board, i, j, word, 0)) return true;
    }
  }
  return false;
};

function dfs(board, i, j, word, k) {
  if (i >= board.length || j >= board[0].length || i < 0 || j < 0 || board[i][j] !== word[k]) return false;
  if (k === word.length - 1) return true;
  const tmp = board[i][j];
  board[i][j] = '/';
  const res =
    dfs(board, i - 1, j, word, k + 1) ||
    dfs(board, i + 1, j, word, k + 1) ||
    dfs(board, i, j - 1, word, k + 1) ||
    dfs(board, i, j + 1, word, k + 1);
  board[i][j] = tmp;
  return res;
}
