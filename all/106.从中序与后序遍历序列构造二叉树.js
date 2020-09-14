/*
 * @lc app=leetcode.cn id=106 lang=javascript
 *
 * [106] 从中序与后序遍历序列构造二叉树
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
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function (inorder, postorder) {
  const n = inorder.length,
    map = {}
  for (let i = 0; i < n; i++) map[inorder[i]] = i
  return buildTreeHelper(inorder, 0, n - 1, postorder, 0, n - 1, map)
}

function buildTreeHelper(inorder, il, ir, postorder, pl, pr, map) {
  if (il > ir || pl > pr || il >= inorder.length || pl >= postorder.length) return null
  const rootVal = postorder[pr]
  const root = new TreeNode(rootVal)
  const i = map[rootVal]
  const len = i - il
  root.left = buildTreeHelper(inorder, il, i - 1, postorder, pl, pl + len - 1, map)
  root.right = buildTreeHelper(inorder, i + 1, ir, postorder, pl + len, pr - 1, map)
  return root
}
// @lc code=end
