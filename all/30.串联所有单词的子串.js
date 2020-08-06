/*
 * @lc app=leetcode.cn id=30 lang=javascript
 *
 * [30] 串联所有单词的子串
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function (s, words) {
  if (!s.length || !words.length) return []
  const wordNum = words.length
  const wordLen = words[0].length
  const wordsLen = wordNum * wordLen
  const ans = []
  let dict = {}
  for (let word of words) {
    if (dict[word] === undefined) dict[word] = 0
    dict[word]++
  }

  for (let i = 0; i < wordLen; i++) {
    let left = i,
      right = i,
      count = 0
    let tmpDict = {}
    while (right + wordLen <= s.length) {
      const w = s.substring(right, right + wordLen)
      right += wordLen
      if (!dict[w]) {
        count = 0
        left = right
        tmpDict = {}
      } else {
        if (tmpDict[w] === undefined) tmpDict[w] = 0
        tmpDict[w]++
        count++
        while (tmpDict[w] > dict[w]) {
          const tmpW = s.substring(left, left + wordLen)
          count--
          tmpDict[tmpW]--
          left += wordLen
        }
        if (count === wordNum) ans.push(left)
      }
    }
  }
  return ans
}
// @lc code=end
