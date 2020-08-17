/*
 * @lc app=leetcode.cn id=60 lang=javascript
 *
 * [60] 第k个排列
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
// 回溯做法稳定超时
var getPermutation = function (n, k) {
  const nums = new Array(n).fill(null).map((_, index) => index + 1)
  let ans = ''
  dfs(nums, [], n, k - 1)
  return ans

  function dfs(nums, path, n, k) {
    if (n === 0) {
      ans = path.join('')
      return
    }
    if (n === 1) {
      path.push(nums.pop())
      dfs(nums, path, n - 1, k)
      return
    }
    const fac = factorial(n - 1)
    const i = Math.floor(k / fac)
    k = k % fac
    const curr = nums.splice(i, 1)
    path.push(...curr)
    dfs(nums, path, n - 1, k)
  }

  function factorial(n) {
    if (n === 1) return 1
    return factorial(n - 1) * n
  }
}

// @lc code=end

getPermutation(4, 9) // '2314'
