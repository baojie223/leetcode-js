/*
 * @lc app=leetcode.cn id=89 lang=javascript
 *
 * [89] 格雷编码
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number[]}
 */
// 回溯剪枝, 留下了没有技术的泪水
// var grayCode = function (n) {
//   if (n === 0) return [0]
//   const path = ['0'.repeat(n)]
//   backtrack('0'.repeat(n))
//   return path.map(str => Number.parseInt(str, 2))

//   function backtrack(bStr) {
//     if (path.length === 2 ** n) {
//       return true
//     }
//     for (let i = 0; i < bStr.length; i++) {
//       const t = bStr.substring(0, i) + (bStr[i] === '0' ? '1' : '0') + bStr.substring(i + 1)
//       if (path.includes(t)) continue
//       path.push(t)
//       if (backtrack(t)) return true
//       path.pop()
//     }
//     return false
//   }
// }

// 通过格雷编码的规律解决
var grayCode = function (n) {
  // 递归解法
  // if (n === 0) return [0]

  // const t = grayCode(n - 1)
  // for (let i = t.length - 1; i >= 0; i--) {
  //   t.push(t[i] + 2 ** (n - 1))
  // }
  // return t

  // 迭代解法
  const ans = [0]
  let head = 1
  for (let i = 0; i < n; i++) {
    const size = ans.length
    for (let j = size - 1; j >= 0; j--) ans.push(ans[j] | head)
    head <<= 1
  }
  return ans
}

// @lc code=end
grayCode(2)
