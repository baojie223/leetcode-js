/*
 * @lc app=leetcode.cn id=114 lang=javascript
 *
 * [114] 二叉树展开为链表
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
 * @return {void} Do not return anything, modify root in-place instead.
 */
// 递归
// var flatten = function (root) {
//   helper(root)
// }

// function helper(root) {
//   if (!root) return null
//   let left = helper(root.left),
//     right = helper(root.right)

//   root.left = null
//   if (!left) {
//     root.right = right
//   } else {
//     root.right = left
//     while (left.right) {
//       left = left.right
//     }
//     if (right) {
//       left.right = right
//     }
//   }
//   return root
// }

// 把右子树插入到左子树的最右节点
var flatten = function (root) {
  while (root) {
    if (!root.left) {
      root = root.right
    } else {
      let pre = root.left
      while (pre.right) {
        pre = pre.right
      }
      pre.right = root.right
      root.right = root.left
      root.left = null
      root = root.right
    }
  }
}
// @lc code=end
