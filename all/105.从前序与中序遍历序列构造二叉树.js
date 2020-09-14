/*
 * @lc app=leetcode.cn id=105 lang=javascript
 *
 * [105] 从前序与中序遍历序列构造二叉树
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
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
// 核心思想就是递归构造树

var buildTree = function (preorder, inorder) {
  const n = preorder.length,
    map = {}
  for (let i = 0; i < n; i++) map[inorder[i]] = i

  return buildTreeHelper(preorder, 0, n - 1, inorder, 0, n - 1, map)
}

function buildTreeHelper(preorder, p1, p2, inorder, i1, i2, map) {
  if (p1 > preorder.length || p2 > preorder.length || i1 > inorder.length || i2 > inorder.length || p1 > p2 || i1 > i2)
    return null
  const rootVal = preorder[p1]
  const root = new TreeNode(rootVal)
  const index = map[rootVal]
  const len = index - i1

  root.left = buildTreeHelper(preorder, p1 + 1, p1 + len, inorder, i1, index - 1, map)
  root.right = buildTreeHelper(preorder, p1 + len + 1, p2, inorder, index + 1, i2, map)

  return root
}
// @lc code=end
function TreeNode(val) {
  this.val = val
  this.left = this.right = null
}
buildTree([3, 9, 20, 15, 7], [9, 3, 15, 20, 7])
