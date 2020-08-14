/*
 * @lc app=leetcode.cn id=56 lang=javascript
 *
 * [56] 合并区间
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  intervals.sort((a, b) => a[0] - b[0])
  const ans = []
  for (let i = 0; i < intervals.length; i++) {
    if (i === 0) {
      ans.push(intervals[i])
      continue
    }
    const [a, b] = ans[ans.length - 1]
    const [c, d] = intervals[i]
    if (c > b) {
      ans.push([c, d])
    } else {
      ans.pop()
      ans.push([Math.min(a, c), Math.max(b, d)])
    }
  }
  return ans
}
// @lc code=end
