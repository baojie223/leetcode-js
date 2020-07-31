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
  const n = digits.length
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

  // 类BFS
  // let queue = []
  // for (let i = 0; i < n; i++) {
  //   const num = Number(digits[i])
  //   const str = dict[num]
  //   if (i === 0) {
  //     for (let c of str) queue.push(c)
  //     continue
  //   }
  //   const tmpQueue = []
  //   while (queue.length) {
  //     const curr = queue.shift()
  //     for (let c of str) tmpQueue.push(curr + c)
  //   }
  //   queue = tmpQueue
  // }
  // return queue

  // DFS暴力, 跟上面的其实一样
  // return dfs(digits, n - 1)

  // function dfs(digits, i) {
  //   const num = Number(digits[i])
  //   const str = dict[num]
  //   const ans = []
  //   if (i < 0) return []
  //   if (i === 0) {
  //     for (let c of str) ans.push(c)
  //     return ans
  //   }
  //   for (let a of dfs(digits, i - 1)) {
  //     for (let c of str) ans.push(a + c)
  //   }
  //   return ans
  // }

  // 回溯
  let ans = [],
    curr = ''
  function dfs(digits, i) {
    if (i === n) {
      if (curr) ans.push(curr)
      return
    }
    const str = dict[Number(digits[i])]
    for (let c of str) {
      curr = curr + c
      dfs(digits, i + 1)
      curr = curr.substr(0, curr.length - 1)
    }
  }
  dfs(digits, 0)
  return ans
}
// @lc code=end

letterCombinations('23')