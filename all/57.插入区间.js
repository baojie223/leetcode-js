/*
 * @lc app=leetcode.cn id=57 lang=javascript
 *
 * [57] 插入区间
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function (intervals, newInterval) {
  intervals.push(newInterval)
  intervals.sort((a, b) => a[0] - b[0])
  const ans = []
  for (let i = 0; i < intervals.length; i++) {
    const [l, r] = intervals[i]
    if (i === 0) {
      ans.push([l, r])
      continue
    }
    const [al, ar] = ans[ans.length - 1]
    if (l > ar) {
      ans.push([l, r])
    } else {
      ans.pop()
      ans.push([Math.min(l, al), Math.max(r, ar)])
    }
  }
  return ans
}
// @lc code=end

insert(
  [
    [1, 2],
    [3, 5],
    [6, 7],
    [8, 10],
    [12, 16],
  ],
  [4, 8]
)
