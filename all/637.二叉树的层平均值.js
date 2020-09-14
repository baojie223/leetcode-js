/*
 * @lc app=leetcode.cn id=637 lang=javascript
 *
 * [637] 二叉树的层平均值
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
 * @return {number[]}
 */
var averageOfLevels = function (root) {
  if (!root) return []
  const ans = [],
    queue = []
  queue.push(root)
  while (queue.length) {
    const size = queue.length
    let sum = 0
    for (let i = 0; i < size; i++) {
      const node = queue.shift()
      sum += node.val
      if (node.left) queue.push(node.left)
      if (node.right) queue.push(node.right)
    }
    ans.push(sum / size)
  }
  return ans
}
// @lc code=end
