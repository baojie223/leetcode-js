/*
 * @lc app=leetcode.cn id=90 lang=javascript
 *
 * [90] 子集 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// 回溯剪枝
// var subsetsWithDup = function (nums) {
//   // 排序进行去重准备
//   nums.sort((a, b) => a - b)
//   const ans = [],
//     n = nums.length
//   backtrack(nums, 0, n - 1, [], ans)
//   return ans
// }
// function backtrack(nums, l, r, path, ans) {
//   ans.push([...path])
//   if (l > r) return
//   for (let i = l; i <= r; i++) {
//     // 重复元素跳过
//     if (i !== l && nums[i] === nums[i - 1]) continue
//     path.push(nums[i])
//     backtrack(nums, i + 1, r, path, ans)
//     path.pop()
//   }
// }

// 迭代
var subsetsWithDup = function (nums) {
  nums.sort((a, b) => a - b)
  const result = [[]]
  let size = 0,
    startIndex = 0
  for (let i = 0; i < nums.length; i++) {
    startIndex = i > 0 && nums[i] === nums[i - 1] ? size : 0
    size = result.length
    for (let j = startIndex; j < size; j++) {
      result.push([...result[j], nums[i]])
    }
  }
  return result
}
// @lc code=end

subsetsWithDup([1, 2, 2])
