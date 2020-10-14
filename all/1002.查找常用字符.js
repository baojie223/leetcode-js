/*
 * @lc app=leetcode.cn id=1002 lang=javascript
 *
 * [1002] 查找常用字符
 */

// @lc code=start
/**
 * @param {string[]} A
 * @return {string[]}
 */
var commonChars = function (A) {
  const minCounts = new Array(26).fill(Infinity)
  for (let word of A) {
    const counts = []
    for (let char of word) {
      const index = char.charCodeAt(0) - 'a'.charCodeAt(0)
      if (typeof counts[index] === 'undefined') counts[index] = 0
      counts[index]++
    }
    for (let i = 0; i < 26; i++) {
      minCounts[i] = Math.min(counts[i], minCounts[i])
    }
  }
  const ans = []
  for (let i = 0; i < 26; i++) {
    const n = minCounts[i]
    const c = String.fromCharCode('a'.charCodeAt(0) + i)
    for (let j = 0; j < n; j++) {
      ans.push(c)
    }
  }
  return ans
}
// @lc code=end
