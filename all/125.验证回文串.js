/*
 * @lc app=leetcode.cn id=125 lang=javascript
 *
 * [125] 验证回文串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  // const strArr = s.toLowerCase().match(/[a-z0-9]{1}/gi)
  // 最后一个测试用例爆栈了
  // function judge(arr, flag = true) {
  //   if (!flag) return false
  //   if (!arr && typeof arr === 'object') return true
  //   let temp = [...arr]
  //   if (temp.length < 2) {
  //     return true
  //   }
  //   if (temp.length === 2) {
  //     return temp[0] === temp[1]
  //   }
  //   if (temp.length > 2) {
  //     const left = temp.shift()
  //     const right = temp.pop()
  //     return judge(temp, left === right)
  //   }
  // }
  // return judge(strArr)

  // solution no.1
  // if (!strArr && typeof strArr === 'object') {
  //   return true
  // }
  // while (strArr.length > 1) {
  //   const left = strArr.shift()
  //   const right = strArr.pop()
  //   if (left !== right) {
  //     return false
  //   }
  // }
  // return true

  // solution no.2 双指针
  const str = s.toLowerCase().match(/[a-z0-9]/ig)
  if (!str && typeof str === 'object') return true
  let i = 0
  let j = str.length - 1
  while (i < j) {
    if (str[i] !== str[j]) {
      return false
    }
    i++
    j--
  }
  return true
}
// @lc code=end
