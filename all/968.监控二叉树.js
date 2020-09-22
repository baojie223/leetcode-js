/*
 * @lc app=leetcode.cn id=968 lang=javascript
 *
 * [968] 监控二叉树
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
 * @return {number}
 */
// 动态规划, 0: 未监控, 1: 有监控但无相机, 2: 有监控且有相机
var minCameraCover = function (root) {
  let ans = 0
  return dfs(root) === 0 ? ans + 1 : ans
  function dfs(root) {
    if (!root) return 1
    const left = dfs(root.left),
      right = dfs(root.right)
    if (left === 1 && right === 1) {
      return 0
    } else if (left === 0 || right === 0) {
      ans++
      return 2
    } else {
      return 1
    }
  }
}

// @lc code=end

function TreeNode(val) {
  this.val = val
  this.left = this.right = null
}

const a = new TreeNode(0)
const b = new TreeNode(0)
const c = new TreeNode(0)
const d = new TreeNode(0)
const e = new TreeNode(0)
const f = new TreeNode(0)
a.left = b
b.right = c
c.left = d
d.right = e
e.left = f

minCameraCover(a)
