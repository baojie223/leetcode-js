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
var rob = function (root) {
  const memo = new Map()
  function db(root) {
    if (memo.has(root)) return memo.get(root)
    if (!root) return 0
    const do_it =
      root.val +
      (root.left ? db(root.left.left) + db(root.left.right) : 0) +
      (root.right ? db(root.right.left) + db(root.right.right) : 0)
    const not_do_it = db(root.left) + db(root.right)
    memo.set(root, Math.max(do_it, not_do_it))
    return memo.get(root)
  }
  return db(root)
}

// @lc code=end
