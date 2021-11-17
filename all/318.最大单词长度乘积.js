/*
 * @lc app=leetcode.cn id=318 lang=javascript
 *
 * [318] 最大单词长度乘积
 */

// @lc code=start
/**
 * @param {string[]} words
 * @return {number}
 */
var maxProduct = function (words) {
  let max = 0
  const length = words.length
  const masks = new Array(length).fill(0)
  for (let i = 0; i < length; i++) {
    const word = words[i]
    const wordLength = word.length
    for (let j = 0; j < wordLength; j++) {
      masks[i] |= 1 << (word[j].charCodeAt() - 'a'.charCodeAt())
    }
  }
  for (let i = 0; i < length; i++) {
    for (let j = i + 1; j < length; j++) {
      if ((masks[i] & masks[j]) === 0) {
        max = Math.max(max, words[i].length * words[j].length)
      }
    }
  }
  return max
}
// @lc code=end
