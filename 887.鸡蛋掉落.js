/*
 * @lc app=leetcode.cn id=887 lang=javascript
 *
 * [887] 鸡蛋掉落
 */

// @lc code=start
/**
 * @param {number} K
 * @param {number} N
 * @return {number}
 */
var superEggDrop = function (K, N) {
  const memo = new Map()
  const dp = (k, n) => {
    const name = `${k}-${n}`
    if (k === 1) return n
    if (n === 0) return 0
    if (memo.has(name)) return memo.get(name)
    let res = Infinity
    for (let i = 1; i <= n; i++) {
      res = Math.min(res, Math.max(dp(k, n - i), dp(k - 1, i - 1)) + 1)
    }
    memo.set(name, res)
    return res
  }
  return dp(K, N)
}
// @lc code=end

superEggDrop(4, 5000)
