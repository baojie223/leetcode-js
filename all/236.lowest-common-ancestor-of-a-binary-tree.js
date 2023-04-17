/*
 * @lc app=leetcode.cn id=236 lang=javascript
 *
 * [236] Lowest Common Ancestor of a Binary Tree
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
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
  if (!root || root === p || root === q) return root
  const left = lowestCommonAncestor(root.left, p, q)
  const right = lowestCommonAncestor(root.right, p, q)
  if (!left) return right
  if (!right) return left
  return root
}
// var lowestCommonAncestor = function (root, p, q) {
//   let dummy = new TreeNode()
//   dummy.left = root
//   while (true) {
//     const leftNodeCanFindPQ = bfs(dummy.left)
//     const rightNodeCanFindPQ = bfs(dummy.right)
//     if (leftNodeCanFindPQ) {
//       dummy = dummy.left
//       continue
//     }
//     if (rightNodeCanFindPQ) {
//       dummy = dummy.right
//       continue
//     }
//     return dummy
//   }

//   function bfs(node) {
//     if (!node) return false
//     const list = [node]
//     let pExist = false
//     let qExist = false
//     while (list.length) {
//       const n = list.shift()
//       if (n.left) list.push(n.left)
//       if (n.right) list.push(n.right)
//       if (n.val === p.val) pExist = true
//       if (n.val === q.val) qExist = true
//       if (pExist && qExist) return true
//     }
//     return false
//   }
// }
// @lc code=end
