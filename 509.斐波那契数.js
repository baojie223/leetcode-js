/*
 * @lc app=leetcode.cn id=509 lang=javascript
 *
 * [509] 斐波那契数
 */

// @lc code=start
/**
 * @param {number} N
 * @return {number}
 */
var fib = function(N) {
  // 1. 递归
  // const memo = []
  // function recur(n, memo) {
  //   if (n <= 1) return n
  //   if (!memo[n]) {
  //     memo[n] = recur(n - 1, memo) + recur(n - 2, memo)
  //   }
  //   return memo[n]
  // }
  // return recur(N, memo)

  // 2. 循环
  const res = [0, 1]
  for (let i = 2; i < N + 1; i++) {
    res[i] = res[i - 1] + res[i - 2]
  }
  return res[N]
};
// @lc code=end

