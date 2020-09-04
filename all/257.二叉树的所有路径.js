/*
 * @lc app=leetcode.cn id=257 lang=javascript
 *
 * [257] 二叉树的所有路径
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
 * @return {string[]}
 */
var binaryTreePaths = function (root) {
  const ans = []
  dfs(root, [], ans)
  return ans
}

function dfs(root, path, ans) {
  if (!root) return

  path.push(root.val)
  if (!root.left && !root.right) ans.push(path.join('->'))

  if (root.left) dfs(root.left, path, ans)

  if (root.right) dfs(root.right, path, ans)

  path.pop()
}
// @lc code=end
