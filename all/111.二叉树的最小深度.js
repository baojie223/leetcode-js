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
  return bfs(root)
}

function bfs(root, depth = 1) {
  if (!root) return 0
  let queue = []
  queue.push(root)
  let tmp = []
  while (queue.length) {
    const a = queue.shift()
    if (!a.left && !a.right) return depth
    if (a.left) tmp.push(a.left)
    if (a.right) tmp.push(a.right)
    if (!queue.length) {
      queue = tmp
      tmp = []
      depth++
    }
  }
}
// @lc code=end
