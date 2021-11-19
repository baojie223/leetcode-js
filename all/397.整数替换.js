/*
 * @lc app=leetcode.cn id=397 lang=javascript
 *
 * [397] 整数替换
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var integerReplacement = function (n) {
  /**
   * 递归，记忆化搜索
   */
  // const memo = {}
  // const getMin = (n) => {
  //   if (n === 1) {
  //     return 0
  //   }
  //   if (!memo[n]) {
  //     if (n % 2 === 0) {
  //       memo[n] = getMin(n / 2) + 1
  //     } else {
  //       memo[n] = Math.min(getMin((n - 1) / 2),getMin((n + 1) / 2)) + 2
  //     }
  //   }
  //   return memo[n]
  // }
  // return getMin(n)

  /**
   * 贪心，位运算
   */
  let count = 0
  while (n > 1) {
    if (n % 2 === 0) {
      n = n >>> 1
    } else {
      if ((n >>> 1 & 1) === 1 && n !== 3) {
        n++
      } else {
        n--
      }
    }
    count++
  }

  return count
}
// @lc code=end

integerReplacement(2147483647)