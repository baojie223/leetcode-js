/*
 * @lc app=leetcode.cn id=108 lang=javascript
 *
 * [108] 将有序数组转换为二叉搜索树
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function (nums) {
  return buildTree(nums, 0, nums.length - 1)
}

function buildTree(nums, lo, hi) {
  if (lo > hi) return null
  const mid = (lo + hi) >>> 1
  const root = new TreeNode(nums[mid])
  root.left = buildTree(nums, lo, mid - 1)
  root.right = buildTree(nums, mid + 1, hi)
  return root
}
// @lc code=end
