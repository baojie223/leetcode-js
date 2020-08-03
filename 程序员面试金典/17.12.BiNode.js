/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var convertBiNode = function (root) {
  const dummy = new TreeNode(0)
  inorder(root, dummy)
  return dummy.right
}

function inorder(root, dummy) {
  if (!root) return dummy
  let d = inorder(root.left, dummy)
  d.right = root
  d = d.right
  d.left = null
  d = inorder(root.right, d)
  return d
}
