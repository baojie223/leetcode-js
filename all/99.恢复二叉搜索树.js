/*
 * @lc app=leetcode.cn id=99 lang=javascript
 *
 * [99] 恢复二叉搜索树
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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var recoverTree = function (root) {
  const nodes = [],
    indexes = []
  inorder(root, nodes)
  for (let i = 0; i < nodes.length - 1; i++) {
    if (nodes[i].val > nodes[i + 1].val) {
      indexes.push(i)
    }
  }
  if (indexes.length === 1) {
    const i = indexes[0]
    swap(nodes, i, i + 1)
  } else {
    const [i, j] = indexes
    swap(nodes, i, j + 1)
  }
}

function swap(a, i, j) {
  const t = a[i].val
  a[i].val = a[j].val
  a[j].val = t
}

function inorder(root, nodes) {
  if (!root) return
  inorder(root.left, nodes)
  nodes.push(root)
  inorder(root.right, nodes)
}
// @lc code=end
