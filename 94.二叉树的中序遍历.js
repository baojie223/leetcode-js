/*
 * @lc app=leetcode.cn id=94 lang=javascript
 *
 * [94] 二叉树的中序遍历
 *
 * https://leetcode-cn.com/problems/binary-tree-inorder-traversal/description/
 *
 * algorithms
 * Medium (70.59%)
 * Likes:    438
 * Dislikes: 0
 * Total Accepted:    128.9K
 * Total Submissions: 182.2K
 * Testcase Example:  '[1,null,2,3]'
 *
 * 给定一个二叉树，返回它的中序 遍历。
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
 * 输出: [1,3,2]
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
var inorderTraversal = function(root) {
  // 1. 递归
  // let res = []
  // helper(root, res)
  // return res

  // 2.迭代
  let res = []
  const stack = []
  let rt = root
  while (rt || stack.length) {
    while (rt) {
      stack.push(rt)
      rt = rt.left
    }
    rt = stack.pop()
    res.push(rt.val)
    rt = rt.right
  }
  return res
}

// const helper = (root, res) => {
//   if (root) {
//     if (root.left) {
//       helper(root.left, res)
//     }
//     res.push(root.val)
//     if (root.right) {
//       helper(root.right, res)
//     }
//   }
// }
// @lc code=end
