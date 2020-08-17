/*
 * @lc app=leetcode.cn id=110 lang=javascript
 *
 * [110] 平衡二叉树
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
 * @param {TreeNode} root
 * @return {boolean}
 */
// 自顶向下
// var isBalanced = function (root) {
//   if (!root) return true
//   return isBalanced(root.left) && isBalanced(root.right) && Math.abs(getHeight(root.left) - getHeight(root.right)) <= 1
// }

// function getHeight(root, h = 0) {
//   if (!root) return h
//   return Math.max(getHeight(root.left, h + 1), getHeight(root.right, h + 1))
// }

// 自底向上
var isBalanced = function (root) {
  return helper(root) !== -1
}

function helper(root) {
  if (!root) return 0

  const left = helper(root.left)
  if (left === -1) return -1
  const right = helper(root.right)
  if (right === -1) return -1

  if (Math.abs(left - right) > 1) return -1

  return Math.max(left, right) + 1
}
// @lc code=end
