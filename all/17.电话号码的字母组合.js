/*
 * @lc app=leetcode.cn id=17 lang=javascript
 *
 * [17] 电话号码的字母组合
 */

// @lc code=start
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  if (!digits.length) return []
  const dict = {
    2: 'abc',
    3: 'def',
    4: 'ghi',
    5: 'jkl',
    6: 'mno',
    7: 'pqrs',
    8: 'tuv',
    9: 'wxyz',
  }
  const ans = []
  backtrack(digits, 0, '', ans, dict)
  return ans
}

function backtrack(digits, i, path, ans, dict) {
  if (i >= digits.length) {
    ans.push(path)
    return
  }
  const digit = digits[i]
  const bag = dict[digit]
  let t = ''
  for (let k = 0; k < bag.length; k++) {
    t = path
    path += bag[k]
    backtrack(digits, i + 1, path, ans, dict)
    path = t
  }
}
// @lc code=end

letterCombinations('23')
