/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 */
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  if (strs.length) {
    let strArr = strs
    let tempArr = strArr.map((str, i) => ({ length: str.length, index: i }))
    let first = tempArr.shift()
    let index = 0
    tempArr.reduce((prev, next) => {
      if (next.length < prev.length) {
        index = next.index
        return next
      } else {
        return prev
      }
    }, first)
    const shortest = strArr[index]
    let short = shortest
    let shortArr = short.split('')
    strArr = strArr.filter(str => str !== shortest)
    shortArr = shortArr.map((str, i) => {
      let temp = strArr.filter(str => str.indexOf(short) === 0)
      if (temp.length === strArr.length) {
        return short
      } else {
        short = short.split('')
        short.pop()
        short = short.join('')
        return ''
      }
    })
    shortArr = shortArr.filter(s => s !== '')
    if (shortArr.length > 0) {
      return shortArr[0]
    } else {
      return ''
    }
  }
  return ''
}
