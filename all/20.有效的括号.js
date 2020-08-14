/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  // 1. 栈匹配
  const stack = []
  for (let i = 0; i < s.length; i++) {
    if (['(', '[', '{'].includes(s[i])) {
      stack.unshift(s[i])
    } else if (
      (s[i] === ')' && stack[0] === '(') ||
      (s[i] === ']' && stack[0] === '[') ||
      (s[i] === '}' && stack[0] === '{')
    ) {
      stack.shift()
    } else return false
  }
  return !stack.length

  // 以前的解法
  // let stack = []
  // const leftBrakets = '([{'
  // const menu = {
  //   ')': '(',
  //   ']': '[',
  //   '}': '{'
  // }
  // const list = s.split('').map(str => {
  //   if (leftBrakets.includes(str)) {
  //     stack.unshift(str)
  //     return true
  //   } else if (menu[str] === stack[0]) {
  //     stack.shift()
  //     return true
  //   } else {
  //     return false
  //   }
  // })
  // return (list.filter(bool => !bool).length || stack.length) ? false : true

  // let small = 0
  // let middle = 0
  // let large = 0
  // s.split('').forEach(item => {
  //   switch (item) {
  //     case '(':
  //       small = small + 1
  //       break
  //     case ')':
  //       if (middle === 0 && large === 0) {
  //         small = small - 1
  //         break
  //       } else {
  //         return false
  //       }
  //     case '[':
  //       middle = middle + 1
  //       break
  //     case ']':
  //         if (small === 0 && large === 0) {
  //           middle = middle - 1
  //           break
  //         } else {
  //           return false
  //         }
  //     case '{':
  //       large = large + 1
  //       break
  //     case '}':
  //         if (small === 0 && middle === 0) {
  //           large = large - 1
  //           break
  //         } else {
  //           return false
  //         }
  //     default:
  //       break
  //   }
  // })
  // return (small === 0 && middle === 0 && large === 0) ? true : false
}
