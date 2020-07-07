/*
 * @lc app=leetcode.cn id=111 lang=javascript
 *
 * [111] 二叉树的最小深度
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
 * @return {number}
 */
var minDepth = function (root) {
  if (!root) return 0
  const queue = []
  queue.push(root)
  let depth = 1
  while (queue.length > 0) {
    const size = queue.length
    for (let i = 0; i < size; i++) {
      const current = queue.shift()
      if (!current.left && !current.right) return depth
      if (current.left) {
        queue.push(current.left)
      }
      if (current.right) {
        queue.push(current.right)
      }
    }
    depth++
  }
  return depth
}
// @lc code=end
