/*
 * @lc app=leetcode.cn id=337 lang=javascript
 *
 * [337] 打家劫舍 III
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
// dp, 0为不偷, 1为偷
var rob = function (root) {
  const memo = new Map()
  return dp(root, memo)
}

function dp(root, memo) {
  if (!root) return 0
  if (memo.has(root)) return memo.get(root)
  const a =
    root.val +
    (root.left ? dp(root.left.left, memo) + dp(root.left.right, memo) : 0) +
    (root.right ? dp(root.right.left, memo) + dp(root.right.right, memo) : 0)
  const b = dp(root.left, memo) + dp(root.right, memo)
  memo.set(root, Math.max(a, b))
  return memo.get(root)
}

// @lc code=end
