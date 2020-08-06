/*
 * @lc app=leetcode.cn id=336 lang=javascript
 *
 * [336] 回文对
 */

// @lc code=start
/**
 * @param {string[]} words
 * @return {number[][]}
 */
var palindromePairs = function (words) {
  const n = words.length
  const ans = []
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (i === j) continue
      if (isPalindrome(words[i] + words[j])) {
        ans.push([i, j])
      }
    }
  }
  return ans
}

function isPalindrome(word) {
  let i = 0,
    j = word.length - 1
  if (i >= j) return true
  while (i <= j) {
    if (word[i] !== word[j]) return false
    i++
    j--
  }
  return true
}
// @lc code=end
