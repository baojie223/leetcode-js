/*
 * @lc app=leetcode.cn id=65 lang=javascript
 *
 * [65] 有效数字
 */

/**
 * @param {string} s
 * @return {boolean}
 */
var isNumber = function (s) {
  let state = 'start'
  s = s.trim()
  for (let c of s) {
    automat(c)
    if (state === 'end') return false
  }
  return !['half-snum', 'half-exp', 'half-sexp', 'half-odec', 'end', 'start'].includes(state)

  function automat(c) {
    switch (state) {
      case 'start': {
        if (isSign(c)) {
          state = 'half-snum'
        } else if (isNum(c)) {
          state = 'num'
        } else if (isDot(c)) {
          state = 'half-odec'
        } else {
          state = 'end'
        }
        break
      }
      case 'num': {
        if (isNum(c)) {
          state = 'num'
        } else if (isDot(c)) {
          state = 'half-dec'
        } else if (isE(c)) {
          state = 'half-exp'
        } else {
          state = 'end'
        }
        break
      }
      case 'half-snum': {
        if (isNum(c)) {
          state = 'snum'
        } else if (isDot(c)) {
          state = 'half-odec'
        } else {
          state = 'end'
        }
        break
      }
      case 'snum': {
        if (isNum(c)) {
          state = 'snum'
        } else if (isDot(c)) {
          state = 'half-dec'
        } else if (isE(c)) {
          state = 'half-exp'
        } else {
          state = 'end'
        }
        break
      }
      case 'half-dec': {
        if (isNum(c)) {
          state = 'dec'
        } else if (isE(c)) {
          state = 'half-exp'
        } else {
          state = 'end'
        }
        break
      }
      case 'dec': {
        if (isNum(c)) {
          state = 'dec'
        } else if (isE(c)) {
          state = 'half-exp'
        } else {
          state = 'end'
        }
        break
      }
      case 'half-odec': {
        if (isNum(c)) {
          state = 'odec'
        } else {
          state = 'end'
        }
        break
      }
      case 'odec': {
        if (isNum(c)) {
          state = 'odec'
        } else if (isE(c)) {
          state = 'half-exp'
        } else {
          state = 'end'
        }
        break
      }
      case 'half-exp': {
        if (isNum(c)) {
          state = 'exp'
        } else if (isSign(c)) {
          state = 'half-sexp'
        } else {
          state = 'end'
        }
        break
      }
      case 'exp': {
        if (isNum(c)) {
          state = 'exp'
        } else {
          state = 'end'
        }
        break
      }
      case 'half-sexp': {
        if (isNum(c)) {
          state = 'sexp'
        } else {
          state = 'end'
        }
        break
      }
      case 'sexp': {
        if (isNum(c)) {
          state = 'sexp'
        } else {
          state = 'end'
        }
        break
      }
      case 'end': {
        break
      }
    }
  }

  function isSign(c) {
    return c === '+' || c === '-'
  }

  function isNum(c) {
    return c >= '0' && c <= '9'
  }

  function isDot(c) {
    return c === '.'
  }

  function isE(c) {
    return c === 'e'
  }
}

// @lc code=end

isNumber('..')
