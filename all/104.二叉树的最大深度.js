/*
 * @lc app=leetcode.cn id=104 lang=javascript
 *
 * [104] 二叉树的最大深度
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
var maxDepth = function (root) {
  // BFS, 时间: O(n), 空间: O(n)
  // if (!root) return 0
  // const queue = [{ root, level: 1 }]
  // let last = null
  // while (queue.length) {
  //   const node = queue.shift()
  //   last = node
  //   if (node.root.left) queue.push({ root: node.root.left, level: node.level + 1 })
  //   if (node.root.right) queue.push({ root: node.root.right, level: node.level + 1 })
  // }
  // return last.level

  // 递归, 时间: O(n), 空间: O(height)
  if (!root) {
    return 0
  }
  return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1
}
// @lc code=end
