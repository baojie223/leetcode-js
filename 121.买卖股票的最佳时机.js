/*
 * @lc app=leetcode.cn id=121 lang=javascript
 *
 * [121] 买卖股票的最佳时机
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  const len = prices.length
  const gaps = new Array(len)
  const findBig = arr => {
    let big = arr[0]
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] > big) {
        big = arr[i]
      }
    }
    return big
  }
  for (let i = 0; i < len; i++) {
    const lastArr = prices.slice(i)
    const big = findBig(lastArr)
    gaps[i] = big - prices[i]
  }
  const result = findBig(gaps)
  return result > 0 ? result : 0
};
// @lc code=end

