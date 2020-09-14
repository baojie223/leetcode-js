/*
 * @lc app=leetcode.cn id=113 lang=javascript
 *
 * [113] 路径总和 II
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
 * @param {number} sum
 * @return {number[][]}
 */
// 回溯剪枝
var pathSum = function (root, sum) {
  const ans = []
  if (!root) return ans
  backtrack(root, sum, [], ans)
  return ans
}

function backtrack(root, sum, path, ans) {
  if (!root.left && !root.right) {
    if (root.val === sum) {
      ans.push([...path, root.val])
    }
    return
  }
  path.push(root.val)
  if (root.left) backtrack(root.left, sum - root.val, path, ans)
  if (root.right) backtrack(root.right, sum - root.val, path, ans)
  path.pop()
}
// @lc code=end
