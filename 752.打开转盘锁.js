/*
 * @lc app=leetcode.cn id=752 lang=javascript
 *
 * [752] 打开转盘锁
 */

// @lc code=start
/**
 * @param {string[]} deadends
 * @param {string} target
 * @return {number}
 */
var openLock = function (deadends, target) {
  const queue = []
  const visited = new Set()
  for (let deadend of deadends) visited.add(deadend)
  if (!visited.has('0000')) {
    queue.push('0000')
    visited.add('0000')
  }
  let depth = 0
  while (queue.length > 0) {
    const size = queue.length
    for (let i = 0; i < size; i++) {
      const current = queue.shift()
      if (current === target) return depth
      for (let j = 0; j < 4; j++) {
        const a = plusOne(current, j)
        const b = minusOne(current, j)
        if (!visited.has(a)) {
          queue.push(a)
          visited.add(a)
        }
        if (!visited.has(b)) {
          queue.push(b)
          visited.add(b)
        }
      }
    }
    depth++
  }
  return -1
}

function plusOne(s, i) {
  const charArr = s.split('').map((n) => Number(n))
  if (charArr[i] === 9) {
    charArr[i] = 0
  } else {
    charArr[i]++
  }
  return charArr.join('')
}

function minusOne(s, i) {
  const charArr = s.split('').map((n) => Number(n))
  if (charArr[i] === 0) {
    charArr[i] = 9
  } else {
    charArr[i]--
  }
  return charArr.join('')
}
// @lc code=end

openLock(['8888'], '0009')
