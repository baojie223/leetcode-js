/*
 * @lc app=leetcode.cn id=844 lang=javascript
 *
 * [844] 比较含退格的字符串
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
// var backspaceCompare = function (s, t) {
//   const stack1 = []
//   const stack2 = []
//   for (let i = 0; i < s.length; i++) {
//     if (s[i] === '#') {
//       stack1.pop()
//     } else {
//       stack1.push(s[i])
//     }
//   }
//   for (let i = 0; i < t.length; i++) {
//     if (t[i] === '#') {
//       stack2.pop()
//     } else {
//       stack2.push(t[i])
//     }
//   }
//   return stack1.join('') === stack2.join('')
// }
function backspaceCompare(s, t) {
  let p = s.length - 1
  let q = t.length - 1
  let sCount = 0
  let tCount = 0
  while (p >= 0 || q >= 0) {
    while (p >= 0) {
      const char = s[p]
      if (char === '#') {
        sCount++
      } else {
        if (sCount > 0) {
          sCount--
        } else {
          break
        }
      }
      p--
    }
    while (q >= 0) {
      const char = t[q]
      if (char === '#') {
        tCount++
      } else {
        if (tCount > 0) {
          tCount--
        } else {
          break
        }
      }
      q--
    }
    if (p < 0 && q < 0) {
      return true
    }
    if (p < 0 || q < 0) {
      return false
    }
    const char1 = s[p]
    const char2 = t[q]
    if (char1 === char2) {
      p--
      q--
    } else {
      return false
    }
  }
  return true
}
// @lc code=end

backspaceCompare('bbbextm', 'bbb#extm')