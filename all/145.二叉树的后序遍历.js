/*
 * @lc app=leetcode.cn id=145 lang=javascript
 *
 * [145] 二叉树的后序遍历
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var postorderTraversal = function (root) {
  // 递归
  const ans = []
  const postorder = (root) => {
    if (!root) return
    postorder(root.left)
    postorder(root.right)
    ans.push(root.val)
  }

  postorder(root)
  return ans

  // 
  // const ans = []
  // let pre = null, cur = root
  // while (cur) {
  //   let node = cur
  //   while (node.left) {

  //   }
  // }
}
// @lc code=end
