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
// 暴力法, 时间O(n3), 空间O(1)
// var longestPalindrome = function (s) {
//   let maxLength = 0,
//     left,
//     right
//   for (let i = 0; i < s.length; i++) {
//     for (let j = i; j < s.length; j++) {
//       if (j - i + 1 < maxLength) continue
//       if (isPalindrome(s, i, j)) {
//         maxLength = j - i + 1
//         left = i
//         right = j
//       }
//     }
//   }
//   return s.substr(left, maxLength)
// }

// function isPalindrome(s, i, j) {
//   while (i <= j) {
//     if (s[i] !== s[j]) return false
//     i++
//     j--
//   }
//   return true
// }

// 动态规划, 时间O(n2), 空间O(n2)
// var longestPalindrome = function (s) {
//   const dp = Array(s.length)
//     .fill('')
//     .map(() => Array(s.length).fill(false))
//   let begin = 0,
//     maxLen = 1
//   for (let i = 0; i < s.length; i++) {
//     dp[i][i] = true
//   }
//   for (let j = 1; j < s.length; j++) {
//     for (let i = 0; i < j; i++) {
//       if (j - i === 1) {
//         dp[i][j] = s[i] === s[j]
//       } else {
//         dp[i][j] = s[i] === s[j] && dp[i + 1][j - 1]
//       }
//       if (dp[i][j] && j - i + 1 > maxLen) {
//         begin = i
//         maxLen = j - i + 1
//       }
//     }
//   }
//   return s.substr(begin, maxLen)
// }

// 中心扩散法, 时间O(n2), 空间O(1)
var longestPalindrome = function (s) {
  let maxLenStr = s.substr(0, 1)
  for (let i = 0; i < s.length - 1; i++) {
    const odd = centerSpread(s, i, i)
    const even = centerSpread(s, i, i + 1)
    const str = odd.length > even.length ? odd : even
    if (str.length > maxLenStr.length) {
      maxLenStr = str
    }
  }
  return maxLenStr
}

function centerSpread(s, i, j) {
  while (i >= 0 && j < s.length) {
    if (s[i] === s[j]) {
      i--
      j++
    } else {
      break
    }
  }
  return s.substr(i + 1, j - i - 1)
}
// @lc code=end
