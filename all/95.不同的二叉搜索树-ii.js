/*
 * @lc app=leetcode.cn id=95 lang=javascript
 *
 * [95] 不同的二叉搜索树 II
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
/**D
 * @param {number} n
 * @return {TreeNode[]}
 */
var generateTrees = function (n) {
  if (n === 0) return []
  return generateTreesByRange(1, n)
}

function generateTreesByRange(left, right) {
  const res = []
  if (left > right) {
    res.push(null)
    return res
  }
  if (left === right) {
    res.push(new TreeNode(left))
    return res
  }
  for (let i = left; i <= right; i++) {
    const leftTrees = generateTreesByRange(left, i - 1)
    const rightTrees = generateTreesByRange(i + 1, right)
    for (const leftTree of leftTrees) {
      for (const rightTree of rightTrees) {
        const root = new TreeNode(i, leftTree, rightTree)
        res.push(root)
      }
    }
  }
  return res
}
// @lc code=end
