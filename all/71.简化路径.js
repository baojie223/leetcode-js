/*
 * @lc app=leetcode.cn id=71 lang=javascript
 *
 * [71] 简化路径
 */

// @lc code=start
/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function (path) {
  /**
   *              /    .     a-z
   *    start     1   -1    -1
   *    slash     1    3     2
   *    word      1    2     2
   *    dot       1    4     2
   *    d-dot     1    2     2
   *
   *    特殊情况: [1, 2], [1, 1] 记录word-left, [2, 0] 记录 word-right, word入栈, [3, 0] 不变, [4, 0] stack弹出
   */
  path = path + '/'
  const table = [
    [1, -1, -1],
    [1, 3, 2],
    [1, 2, 2],
    [1, 4, 2],
    [1, 2, 2],
  ]
  const stack = []
  let state = 0,
    l,
    r
  for (let i = 0; i < path.length; i++) {
    automat(path[i], i)
  }
  return '/' + stack.join('/')

  function automat(c, i) {
    switch (c) {
      case '/': {
        if (state === 2) {
          r = i
          stack.push(path.substring(l, r))
        } else if (state === 4) {
          if (stack.length) stack.pop()
        }
        state = table[state][0]
        break
      }
      case '.': {
        if (state === 1) {
          l = i
        }
        state = table[state][1]
        break
      }
      default: {
        if (isAlpha(c)) {
          if (state === 1) {
            l = i
          }
          state = table[state][2]
        }
      }
    }
  }

  function isAlpha(c) {
    return (c >= 'a' && c <= 'z') || (c >= 'A' && c <= 'Z')
  }
}
// @lc code=end

simplifyPath('/.hidden') // abc
