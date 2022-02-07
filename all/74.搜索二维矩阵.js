/*
 * @lc app=leetcode.cn id=74 lang=javascript
 *
 * [74] 搜索二维矩阵
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
// var searchMatrix = function (matrix, target) {
//   if (!matrix.length) return false
//   const m = matrix.length,
//     n = matrix[0].length

//   // 先逐行判断, 再做二分
//   for (let i = 0; i < m; i++) {
//     if (matrix[i][n - 1] >= target) {
//       return search(i * n, (i + 1) * n - 1)
//     }
//   }
//   return false

//   // 直接二分
//   // return search(0, m * n - 1)

//   function search(lo, hi) {
//     if (lo > hi) return false
//     const mid = Math.floor(lo + (hi - lo) / 2)
//     const val = getValue(mid)
//     if (target > val) {
//       return search(mid + 1, hi)
//     } else if (target < val) {
//       return search(lo, mid - 1)
//     } else {
//       return true
//     }
//   }

//   function getValue(index) {
//     return matrix[Math.floor(index / n)][index % n]
//   }
// }

// 20211220
function searchMatrix(matrix, target) {
  const row = binarySearchFirstColumn(matrix, target)
  if (row < 0) {
    return false
  }
  return binarySearch(matrix[row], target)
}

function binarySearchFirstColumn(matrix, target) {
  let l = -1
  let r = matrix.length - 1
  while (l < r) {
    const mid = l + ((r - l + 1) >>> 1)
    if (matrix[mid][0] <= target) {
      l = mid
    } else {
      r = mid - 1
    }
  }
  return l
}

function binarySearch(nums, target) {
  let l = 0
  let r = nums.length - 1
  while (l <= r) {
    const mid = l + ((r - l) >>> 1)
    if (nums[mid] < target) {
      l = mid + 1
    } else if (nums[mid] > target) {
      r = mid - 1
    } else {
      return true
    }
  }
  return false
}
// @lc code=end

searchMatrix(
  [
    [1, 3, 5, 7],
    [10, 11, 16, 20],
    [23, 30, 34, 50],
  ],
  3
)

// searchMatrix([[1], [3]], 3)

// searchMatrix(
//   [
//     [1, 1],
//     [2, 2],
//   ],
//   2
// )
