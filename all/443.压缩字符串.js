/*
 * @lc app=leetcode.cn id=443 lang=javascript
 *
 * [443] 压缩字符串
 */

// @lc code=start
/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function(chars) {
  if (chars.length < 2) {
    return chars.length
  }
  let left
  let num = 1
  let index = chars.length - 1
  chars.push(chars.shift())
  for (let i = 1; i < chars.length; i++) {
    left = chars.pop()
    if (left === chars[index]) {
      num++
      if (chars[chars.length - 1])
      chars.push(String(num))
      index--
    } else {

    }
  }
  for (let j = 0; j < chars.length; j++) {
    if (typeof chars[j] === 'string') {
      if (tempNum) {
        len = len + tempNum.length
      } else {
        len++
      }
    }
    if (typeof chars[j] === 'number') {
      tempNum = chars[j]
    }
  }
  return len
}
// @lc code=end

// compress(["a","a","b","b","c","c","c"])