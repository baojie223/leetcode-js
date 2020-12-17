/*
 * @lc app=leetcode.cn id=124 lang=javascript
 *
 * [124] 二叉树中的最大路径和
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxPathSum = function (root) {
  let maxValue = -Infinity
  max(root)
  return maxValue

  function max(root) {
    if (!root) return 0
    const leftMax = Math.max(max(root.left), 0)
    const rightMax = Math.max(max(root.right), 0)

    const maxSum = leftMax + root.val + rightMax
    maxValue = Math.max(maxSum, maxValue)

    return Math.max(leftMax, rightMax) + root.val
  }
}

// @lc code=end
