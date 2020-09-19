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
var inorderTraversal = function (root) {
  // 递归
  // const ans = []
  // inorder(root)
  // return ans

  // function inorder(root) {
  //   if (!root) return
  //   inorder(root.left)
  //   ans.push(root.val)
  //   inorder(root.right)
  // }

  // 迭代
  const ans = [],
    stack = []

  while (root || stack.length) {
    while (root) {
      stack.push(root)
      root = root.left
    }
    const node = stack.pop()
    ans.push(node.val)
    root = node.right
  }

  return ans
}
// @lc code=end
