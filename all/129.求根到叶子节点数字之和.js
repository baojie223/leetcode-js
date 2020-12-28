/*
 * @lc app=leetcode.cn id=129 lang=javascript
 *
 * [129] 求根到叶子节点数字之和
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
var sumNumbers = function (root) {
  // 聪明的递归
  return helper(root, 0)

  function helper(root, i) {
    if (!root) return 0
    const temp = i * 10 + root.val
    if (isLeaf(root)) return temp
    return helper(root.left, temp) + helper(root.right, temp)
  }

  // 愚蠢的回溯
  // if (!root) return 0
  // let sum = 0
  // dfs(root)

  // return sum

  // function dfs(root, str = String(root.val)) {
  //   if (isLeaf(root)) {
  //     sum += Number(str)
  //     return
  //   }
  //   if (root.left) {
  //     str += root.left.val
  //     dfs(root.left, str)
  //     str = str.substr(0, str.length - 1)
  //   }
  //   if (root.right) {
  //     str += root.right.val
  //     dfs(root.right, str)
  //     str = str.substr(0, str.length - 1)
  //   }
  // }

  function isLeaf(node) {
    return !node.left && !node.right
  }
}
// @lc code=end

function TreeNode(val) {
  this.val = val
  this.left = this.right = null
}

const a = new TreeNode(1)
a.left = new TreeNode(2)
a.right = new TreeNode(3)
sumNumbers(a)
