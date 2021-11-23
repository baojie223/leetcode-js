/*
 * @lc app=leetcode.cn id=859 lang=javascript
 *
 * [859] 亲密字符串
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var buddyStrings = function(s, goal) {
  let l, r
  const map = {}
  for (let i = 0; i < s.length; i++) {
    if (!map[s[i]]) {
      map[s[i]] = 0
    }
    map[s[i]]++
    if (s[i] !== goal[i]) {
      l = i
      break;
    }
  }
  if (!l && Object.values(map).some(item => item > 1)) {
    return true
  }
  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] !== goal[i]) {
      r = i
      break;
    }
  }
  for (let i = l; i <= r; i++) {
    for (let j = i + 1; j <= r ; j++) {
      const x = s.split('')
      const tmp = x[i]
      x[i] = x[j]
      x[j] = tmp
      const y = x.join('')
      if (y === goal) {
        return true
      }
    }
  }
  return false
};
// @lc code=end

