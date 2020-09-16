/*
 * @lc app=leetcode.cn id=226 lang=javascript
 *
 * [226] 翻转二叉树
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
var invertTree = function (root) {
  // 递归
  // if (!root) return null
  // const tmp = root.left
  // root.left = invertTree(root.right)
  // root.right = invertTree(tmp)
  // return root

  // 迭代, 层序遍历, 逐个翻转
  if (!root) return null
  const queue = []
  queue.push(root)
  while (queue.length) {
    const cur = queue.shift()
    const tmp = cur.left
    cur.left = cur.right
    cur.right = tmp

    if (cur.left) queue.push(cur.left)
    if (cur.right) queue.push(cur.right)
  }
  return root
}
// @lc code=end
