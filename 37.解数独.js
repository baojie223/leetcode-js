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
      if (board[i][j] !== '.') continue
      for (let num = 1; num <= 9; num++) {
        if (!isValid(board, i, j, String(num))) continue
        board[i][j] = String(num)
        if (backtrack(board, i, j + 1)) {
          return true
        }
        board[i][j] = '.'
      }
      return false
    }
  }
  return true
}

function isValid(board, row, col, num) {
  for (let i = 0; i < 9; i++) {
    if (board[row][i] === num || board[i][col] === num) {
      return false
    }
  }
  const rowStart = Math.floor(row / 3) * 3
  const colStart = Math.floor(col / 3) * 3
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (board[rowStart + i][colStart + j] === num) {
        return false
      }
    }
  }
  return true
}

// solveSudoku([
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

// var solveSudoku = function (board) {
//   solve(board, 0, 0)
// }

// var solve = function (board, row, col) {
//   for (let i = row; i < 9; i++, col = 0) {
//     for (let j = col; j < 9; j++) {
//       if (board[i][j] !== '.') continue
//       for (let c = 1; c <= 9; c++) {
//         if (isValid(board, i, j, c.toString())) {
//           board[i][j] = c.toString()

//           if (solve(board, i, j + 1)) {
//             return true
//           }
//           board[i][j] = '.'
//         }
//       }
//       return false
//     }
//   }
//   return true
// }

// var isValid = function (board, x, y, c) {
//   let rowStart = Math.floor(x / 3) * 3
//   let colStart = Math.floor(y / 3) * 3

//   for (let i = 0; i < 9; i++) {
//     if (board[i][y] === c || board[x][i] === c) return false
//   }

//   for (let i = 0; i < 3; i++) {
//     for (let j = 0; j < 3; j++) {
//       if (board[rowStart + i][colStart + j] === c) return false
//     }
//   }

//   return true
// }
// @lc code=end
