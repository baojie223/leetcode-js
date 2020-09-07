/*
 * @lc app=leetcode.cn id=107 lang=javascript
 *
 * [107] 二叉树的层次遍历 II
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
var levelOrderBottom = function (root) {
  const ans = []
  if (!root) return ans
  bfs(root, ans)
  return ans
}

function bfs(root, ans) {
  const queue = []
  queue.push(root)
  while (queue.length) {
    const sz = queue.length
    const tmp = []
    for (let i = 0; i < sz; i++) {
      const a = queue.shift()
      if (a.left) queue.push(a.left)
      if (a.right) queue.push(a.right)
      tmp.push(a.val)
    }
    ans.unshift(tmp)
  }
}
// @lc code=end
