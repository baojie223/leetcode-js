/*
 * @lc app=leetcode.cn id=78 lang=javascript
 *
 * [78] 子集
 *
 * https://leetcode-cn.com/problems/subsets/description/
 *
 * algorithms
 * Medium (76.82%)
 * Likes:    502
 * Dislikes: 0
 * Total Accepted:    73.7K
 * Total Submissions: 95.8K
 * Testcase Example:  '[1,2,3]'
 *
 * 给定一组不含重复元素的整数数组 nums，返回该数组所有可能的子集（幂集）。
 *
 * 说明：解集不能包含重复的子集。
 *
 * 示例:
 *
 * 输入: nums = [1,2,3]
 * 输出:
 * [
 * ⁠ [3],
 * [1],
 * [2],
 * [1,2,3],
 * [1,3],
 * [2,3],
 * [1,2],
 * []
 * ]
 *
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
  // 1. 递归
  const res = []
  generate([], 0)
  function generate(path, index) {
    res.push(path)
    for (let i = index; i < nums.length; i++) {
      generate([...path, nums[i]], i + 1)
    }
  }
  return res
}
// @lc code=end
