/*
 * @lc app=leetcode.cn id=491 lang=javascript
 *
 * [491] 递增子序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var findSubsequences = function (nums) {
  const ans = []
  if (!nums.length) return ans
  const memo = {}
  backtrack([], nums, ans, memo)
  return ans
}

function backtrack(path, nums, ans, memo) {
  if (path.length >= 2) {
    if (memo[path.join('.')]) return
    memo[path.join('.')] = 1
    ans.push([...path])
  }
  const a = path.length ? path[path.length - 1] : -Infinity
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < a) continue
    path.push(nums[i])
    backtrack(path, nums.slice(i + 1), ans, memo)
    path.pop()
  }
}
// var findSubsequences = function (nums) {
//   const n = nums.length
//   const ans = []
//   if (!n) return ans
//   let path = []
//   for (let i = 0; i < n; i++) {
//     const a = nums[i]
//     path.push(a)
//     for (let j = i + 1; j < n; j++) {
//       const b = nums[j]
//       if (a <= b) {
//         path.push(b)
//         ans.push([...path])
//       }
//     }
//     path = []
//   }
//   return ans
// }

// @lc code=end

findSubsequences([4, 3, 2, 1])
