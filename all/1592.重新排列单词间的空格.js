/*
 * @lc app=leetcode.cn id=1592 lang=javascript
 *
 * [1592] 重新排列单词间的空格
 */

// @lc code=start
/**
 * @param {string} text
 * @return {string}
 */
var reorderSpaces = function (text) {
  const n = text.length
  const words = []
  let spaceNum = 0
  let left = -1
  let i = 0
  while (i < n) {
    if (text[i] === ' ') {
      spaceNum++
      i++
    } else {
      left = i
      while (text[i] !== ' ' && i < n) {
        i++
      }
      words.push(text.substring(left, i))
      left = -1
    }
  }
  if (words.length === 1) {
    return words.join('') + ' '.repeat(spaceNum)
  }
  const averageSpace = Math.floor(spaceNum / (words.length - 1))
  const otherSpace = spaceNum % (words.length - 1)
  return words.join(' '.repeat(averageSpace)) + ' '.repeat(otherSpace)
}
// @lc code=end

reorderSpaces('  hello')
