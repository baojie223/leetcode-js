/*
 * @lc app=leetcode.cn id=828 lang=javascript
 *
 * [828] 统计子串中的唯一字符
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var uniqueLetterString = function (s) {
  const n = s.length
  const indexMap = new Map()
  let ans = 0
  for (let i = 0; i < n; i++) {
    if (!indexMap.has(s[i])) {
      indexMap.set(s[i], [])
      indexMap.get(s[i]).push(-1)
    }
    indexMap.get(s[i]).push(i)
  }
  for (let [, indexList] of indexMap.entries()) {
    indexList.push(n)
    for (let i = 1; i < indexList.length - 1; i++) {
      ans += (indexList[i] - indexList[i - 1]) * (indexList[i + 1] - indexList[i])
    }
  }
  return ans
}

// var uniqueLetterString = function (s) {
//   const n = s.length
//   let ans = 0
//   let charCounts = new Array(26).fill(0)
//   for (let i = 0; i < n; i++) {
//     charCounts = new Array(26).fill(0)
//     for (let j = i; j < n; j++) {
//       charCounts[s[j].charCodeAt(0) - 'A'.charCodeAt(0)]++
//       for (let k = 0; k < 26; k++) {
//         if (charCounts[k] === 1) ans++
//       }
//     }
//   }
//   return ans
// }

// var uniqueLetterString = function (s) {
//   const n = s.length
//   let ans = 0
//   for (let i = 0; i < n; i++) {
//     for (let j = i + 1; j <= n; j++) {
//       ans += countUniqueChars(s.substring(i, j))
//     }
//   }
//   return ans
// }

// function countUniqueChars(t) {
//   const charMap = new Map()
//   let ans = 0
//   for (let i = 0; i < t.length; i++) {
//     if (!charMap.get(t[i])) {
//       charMap.set(t[i], 0)
//     }
//     charMap.set(t[i], charMap.get(t[i]) + 1)
//   }
//   for (let [, value] of charMap.entries()) {
//     if (value === 1) {
//       ans++
//     }
//   }
//   return ans
// }
// @lc code=end
