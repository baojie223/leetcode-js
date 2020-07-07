/*
 * @lc app=leetcode.cn id=222 lang=javascript
 *
 * [222] 完全二叉树的节点个数
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
var countNodes = function (root) {
  // if (!root) return 0;
  // return 1 + countNodes(root.left) + countNodes(root.right);

  let l = root,
    r = root;
  let lh = 0,
    rh = 0;
  while (l) {
    l = l.left;
    lh++;
  }
  while (r) {
    r = r.right;
    rh++;
  }
  if (lh === rh) {
    return Math.pow(2, lh) - 1;
  } else {
    return 1 + countNodes(root.left) + countNodes(root.right);
  }
};
// @lc code=end
