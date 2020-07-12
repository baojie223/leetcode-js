/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
  if (!preorder.length) return null;
  const rootVal = preorder[0];
  const rootIndex = inorder.findIndex((val) => val === rootVal);
  const leftLen = rootIndex;
  const leftPreorder = preorder.slice(1, 1 + leftLen);
  const rightPreorder = preorder.slice(1 + leftLen);
  const leftInorder = inorder.slice(0, rootIndex);
  const rightInorder = inorder.slice(rootIndex + 1);
  const root = new TreeNode(rootVal);
  root.left = buildTree(leftPreorder, leftInorder);
  root.right = buildTree(rightPreorder, rightInorder);
  return root;
};
