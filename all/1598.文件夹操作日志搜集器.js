/*
 * @lc app=leetcode.cn id=1598 lang=javascript
 *
 * [1598] 文件夹操作日志搜集器
 */

// @lc code=start
/**
 * @param {string[]} logs
 * @return {number}
 */
var minOperations = function (logs) {
  let depth = 0
  for (let log of logs) {
    if (log === '../') {
      depth = Math.max(0, depth - 1)
    } else if (log === './') {
      continue
    } else {
      depth++
    }
  }
  return depth
}
// @lc code=end

minOperations(['d1/', 'd2/', '../', 'd21/', './'])
