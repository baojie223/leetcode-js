/*
 * @lc app=leetcode.cn id=38 lang=javascript
 *
 * [38] 报数
 */
/**
 * @param {number} n
 * @return {string}
 */

const next = str => {
  // let menu = [{
  //   key: '1',
  //   num: 1
  // }]
  // let list = str.split('')
  // const first = list.shift()
  // const last = list.reduce((pre, cur) => {
  //   if (cur === pre) {
  //     menu[menu.length - 1].num = menu[menu.length - 1].num + 1
  //   } else {
  //     menu.push({ key: pre, num: 1 })
  //   }
  //   return cur
  // }, first)
  // if (last === menu[menu.length - 1].key) {
  //   menu[menu.length - 1].num = menu[menu.length - 1].num + 1
  // }
  // // if (last === menu[menu.length - 1])
  // return menu.map(item => {
  //   let str = ''
  //   for(let i = 0; i < item.num; i++) {
  //     str = str + item.key
  //   }
  //   return str
  // }).join('')
  // let list = str.split('')
  // let menu = {}
  // for (let i = 0; i < list.length - 1; i++) {
  //   menu[list[i]] = 1
  //   for (let j = i + 1; ; j++) {
  //     if (list[j] === list [i]) {
  //       menu[list[i]] = menu[list[i]] + 1
  //     } else {
  //       i = j
  //       break
  //     }
  //   }
  // }
  // let s = ''
  // for (let key in menu) {
  //   for (let k = 0; k < menu[key]; k ++) {
  //     s = s + key
  //   }
  // }
  // return s
  let res = ''
  let i = 0
  let j = 0
  while (j < str.length) {
    if (str[j] === str[i]) {
      j++
    } else {
      res += (j - i) + str[i]
      i = j
    }
  }
  res += (j - i) + str[i]
  return res
}
var countAndSay = function(n) {
  if (n === 1) {
    return '1'
  }
  return next(countAndSay(n - 1))
}
