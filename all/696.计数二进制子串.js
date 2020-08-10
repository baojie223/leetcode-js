/*
 * @lc app=leetcode.cn id=696 lang=javascript
 *
 * [696] 计数二进制子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var countBinarySubstrings = function (s) {
  const n = s.length
  const counts = []
  let flag,
    count = 0
  for (let i = 0; i < n; i++) {
    if (!flag) {
      flag = s[i]
      counts[0] = 0
    }
    if (s[i] !== flag) {
      flag = s[i]
      counts.push(1)
    } else {
      counts[counts.length - 1]++
    }
  }
  for (let i = 0; i < counts.length - 1; i++) {
    count += Math.min(counts[i], counts[i + 1])
  }
  return count
}
// @lc code=end

countBinarySubstrings('00110') // 3
