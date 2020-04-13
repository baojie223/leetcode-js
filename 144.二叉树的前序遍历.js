/*
 * @lc app=leetcode.cn id=144 lang=javascript
 *
 * [144] 二叉树的前序遍历
 *
 * https://leetcode-cn.com/problems/binary-tree-preorder-traversal/description/
 *
 * algorithms
 * Medium (64.63%)
 * Likes:    229
 * Dislikes: 0
 * Total Accepted:    83.8K
 * Total Submissions: 129.3K
 * Testcase Example:  '[1,null,2,3]'
 *
 * 给定一个二叉树，返回它的 前序 遍历。
 *
 * 示例:
 *
 * 输入: [1,null,2,3]
 * ⁠  1
 * ⁠   \
 * ⁠    2
 * ⁠   /
 * ⁠  3
 *
 * 输出: [1,2,3]
 *
 *
 * 进阶: 递归算法很简单，你可以通过迭代算法完成吗？
 *
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
var preorderTraversal = function (root) {
  // 1.递归
  // function helper(root, res) {
  //   if (root) {
  //     res.push(root.val)
  //     if (root.left) {
  //       helper(root.left, res)
  //     }
  //     if (root.right) {
  //       helper(root.right, res)
  //     }
  //   }
  // }
  // const res = []
  // helper(root, res)
  // return res

  // 2. 迭代
  const res = []
  const stack = []
  if (!root) return res
  stack.push(root)
  while (stack.length) {
    const node = stack.pop()
    if (node) res.push(node.val)
    if (node.right) stack.push(node.right)
    if (node.left) stack.push(node.left)
  }
  return res
}
// @lc code=end
