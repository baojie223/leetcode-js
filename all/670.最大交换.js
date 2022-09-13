/*
 * @lc app=leetcode.cn id=670 lang=javascript
 *
 * [670] 最大交换
 */

// @lc code=start
/**
 * @param {number} num
 * @return {number}
 */
var maximumSwap = function (num) {
  const n = String(num).length
  let max = num
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      const ans = swap(num, i, j)
      max = Math.max(max, ans)
    }
  }
  return max

  function swap(num, i, j) {
    const nums = String(num).split('')
    const temp = nums[i]
    nums[i] = nums[j]
    nums[j] = temp
    return Number(nums.join(''))
  }
}
// @lc code=end
