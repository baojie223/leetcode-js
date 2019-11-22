/*
 * @lc app=leetcode.cn id=5 lang=javascript
 *
 * [5] 最长回文子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
  var longestPalindrome = function(s) {
    function judge(i, j) {
      if (j < i + 3) {
        return s[i] === s[j] ? true : false
      }
      if (judge(i + 1, j - 1) && s[i] === s[j]) {
        return true
      } else {
        return false
      }
    }
    if (s.length < 2) return s
    const dp = []
    let left = 0
    let right = 0
    for (let i = 0; i < s.length; i++) {
      dp[i] = []
      for (let j = i + 1; j < s.length; j++) {
        dp[i][j] = judge(i, j)
        if (dp[i][j]) {
          if (j - i > right - left) {
            right = j
            left = i
            // console.log(right, left)
          }
        }
      }
    }
    // return dp
    // console.log(dp)
    // console.log(left, right)
    return left === 0 && right === 0 ? s[0] : s.slice(left, right) + s[right]
  }
// @lc code=end

// console.log(longestPalindrome('aaaaaaaaaaaaaaaaaa'))