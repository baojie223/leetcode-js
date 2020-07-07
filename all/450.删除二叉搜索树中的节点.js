/*
 * @lc app=leetcode.cn id=450 lang=javascript
 *
 * [450] 删除二叉搜索树中的节点
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
 * @param {number} key
 * @return {TreeNode}
 */
var deleteNode = function (root, key) {
  if (!root) return null
  if (root.val === key) {
    if (!root.left && !root.right) return null
    if (!root.left) return root.right
    if (!root.right) return root.left
    const minNode = getMin(root.right)
    root.val = minNode.val
    root.right = deleteNode(root.right, minNode.val)
  } else if (root.val < key) {
    root.right = deleteNode(root.right, key)
  } else if (root.val > key) {
    root.left = deleteNode(root.left, key)
  }
  return root
}

function getMin(root) {
  while (root.left) root = root.left
  return root
}
// @lc code=end
