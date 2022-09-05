/*
 * @lc app=leetcode.cn id=652 lang=javascript
 *
 * [652] 寻找重复的子树
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
 * @return {TreeNode[]}
 */
var findDuplicateSubtrees = function (root) {
  const seen = new Map()
  const repeat = new Set()
  dfs(root)
  return [...repeat]

  function dfs(node) {
    if (!node) {
      return ''
    }
    const str = `${node.val}(${dfs(node.left)})(${dfs(node.right)})`
    if (seen.has(str)) {
      repeat.add(seen.get(str))
    } else {
      seen.set(str, node)
    }
    return str
  }
}
// @lc code=end
