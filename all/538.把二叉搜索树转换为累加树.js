/*
 * @lc app=leetcode.cn id=538 lang=javascript
 *
 * [538] 把二叉搜索树转换为累加树
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
 * @return {TreeNode}
 */
const convertBST = (root) => {
  let sum = 0
  const inorder = (root) => {
    if (!root) return
    inorder(root.right)
    sum += root.val
    root.val = sum
    inorder(root.left)
  }
  inorder(root)
  return root
}
// @lc code=end
