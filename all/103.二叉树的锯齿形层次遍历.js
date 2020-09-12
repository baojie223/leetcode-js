/*
 * @lc app=leetcode.cn id=103 lang=javascript
 *
 * [103] 二叉树的锯齿形层次遍历
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
// 经典bfs, 只不过在每一层要做一些特殊操作
var zigzagLevelOrder = function (root) {
  if (!root) return []
  const ans = [],
    queue = []
  let flag = true
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
    if (!flag) tmp.reverse() 
    ans.push(tmp)
    flag = !flag
  }
  return ans
}
// @lc code=end
