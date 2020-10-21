/*
 * @lc app=leetcode.cn id=925 lang=javascript
 *
 * [925] 长按键入
 */

// @lc code=start
/**
 * @param {string} name
 * @param {string} typed
 * @return {boolean}
 */
var isLongPressedName = function (name, typed) {
  const n = name.length,
    m = typed.length
  let i = 0,
    j = 0
  while (i < n && j < m) {
    if (name[i] !== typed[j]) {
      if (j === 0) return false
      if (typed[j] !== typed[j - 1]) {
        return false
      } else {
        j++
        continue
      }
    }
    i++
    j++
  }
  if (i < n) return false
  while (j < m) {
    if (typed[j] !== typed[j - 1]) return false
    j++
  }
  return true
}
// @lc code=end

isLongPressedName('vtkgn', 'vttkgnn')
