/*
 * @lc app=leetcode.cn id=279 lang=javascript
 *
 * [279] Perfect Squares
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function (n) {
  // 动态规划
  // const dp = new Array(n + 1).fill(0)
  // for (let i = 1; i <= n; i++) {
  //   let min = Number.MAX_VALUE
  //   for (let j = 1; j * j <= i; j++) {
  //     min = Math.min(min, dp[i - j * j])
  //   }
  //   dp[i] = 1 + min
  // }
  // return dp[n]

  // 四平方和定理
  const isOne = (num) => {
    const root = Math.floor(Math.sqrt(num))
    return root * root === num
  }

  const isTwo = (num) => {
    for (let i = 1; i * i < num; i++) {
      const x = num - i * i
      if (isOne(x)) return true
    }
    return false
  }

  const isFour = (num) => {
    while (num % 4 === 0) {
      num /= 4
    }
    return num % 8 === 7
  }

  if (isOne(n)) return 1
  if (isTwo(n)) return 2
  if (isFour(n)) return 4
  return 3
}
// @lc code=end
