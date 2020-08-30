/*
 * @lc app=leetcode.cn id=214 lang=javascript
 *
 * [214] 最短回文串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var shortestPalindrome = function (s) {
  let temp = s + '#' + s.split('').reverse().join('')
  let table = getTable(temp)

  //get the maximum palin part in s starts from 0
  return (
    s
      .substring(table[table.length - 1])
      .split('')
      .reverse()
      .join('') + s
  )
}

function getTable(s) {
  //get lookup table
  let table = [0]

  //pointer that points to matched char in prefix part

  let index = 0
  //skip index 0, we will not match a string with itself
  for (let i = 1; i < s.length; i++) {
    if (s[index] == s[i]) {
      //we can extend match in prefix and postfix
      table[i] = table[i - 1] + 1
      index++
    } else {
      //match failed, we try to match a shorter substring

      //by assigning index to table[i-1], we will shorten the match string length, and jump to the
      //prefix part that we used to match postfix ended at i - 1
      index = table[i - 1]

      while (index > 0 && s[index] != s[i]) {
        //we will try to shorten the match string length until we revert to the beginning of match (index 1)
        index = table[index - 1]
      }

      //when we are here may either found a match char or we reach the boundary and still no luck
      //so we need check char match
      if (s[index] == s[i]) {
        //if match, then extend one char
        index++
      }

      table[i] = index
    }
  }

  return table
}
// @lc code=end

shortestPalindrome('aacecaaa')
