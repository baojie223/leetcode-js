/*
 * @lc app=leetcode.cn id=687 lang=typescript
 *
 * [687] 最长同值路径
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

// class TreeNode {
//   val: number
//   left: TreeNode | null
//   right: TreeNode | null
//   constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
//     this.val = val === undefined ? 0 : val
//     this.left = left === undefined ? null : left
//     this.right = right === undefined ? null : right
//   }
// }

function longestUnivaluePath(root: TreeNode | null): number {
  if (!root) {
    return 0
  }
  let res = 0
  function longestPath(node: TreeNode | null): number {
    if (!node) {
      return 0
    }
    let left = longestPath(node.left)
    let right = longestPath(node.right)
    if (node.left && node.left.val === node.val) {
      left++
    } else {
      left = 0
    }
    if (node.right && node.right.val === node.val) {
      right++
    } else {
      right = 0
    }
    res = Math.max(res, left + right)
    return Math.max(left, right)
  }
  longestPath(root)
  return res
}
// @lc code=end
