/*
 * @lc app=leetcode.cn id=98 lang=javascript
 *
 * [98] 验证二叉搜索树
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
var isValidBST = function (root) {
  if (!root) return true;
  if (root.right && root.val >= getMin(root.right).val) return false;
  if (root.left && root.val <= getMax(root.left).val) return false;
  return isValidBST(root.left) && isValidBST(root.right);
};

function getMin(root) {
  while (root.left) root = root.left;
  return root;
}

function getMax(root) {
  while (root.right) root = root.right;
  return root;
}
// @lc code=end
