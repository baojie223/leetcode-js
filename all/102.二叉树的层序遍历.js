/*
 * @lc app=leetcode.cn id=102 lang=javascript
 *
 * [102] 二叉树的层序遍历
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
 * @return {number[][]}
 */
var levelOrder = function (root) {
  if (!root) return []
  const ans = [],
    queue = []
  queue.push(root)
  while (queue.length) {
    const size = queue.length
    const tmp = []
    for (let i = 0; i < size; i++) {
      const node = queue.shift()
      tmp.push(node.val)
      if (node.left) queue.push(node.left)
      if (node.right) queue.push(node.right)
    }
    ans.push(tmp)
  }
  return ans
}
// @lc code=end
