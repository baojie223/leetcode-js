/*
 * @lc app=leetcode.cn id=117 lang=javascript
 *
 * [117] 填充每个节点的下一个右侧节点指针 II
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function (root) {
  if (!root) return root
  let dummy = new Node(),
    p = dummy,
    head = root
  // head是每一层的第一个节点
  while (head) {
    let node = head
    // 拼接head所在层的下一层
    while (node) {
      if (node.left) {
        p.next = node.left
        p = p.next
      }
      if (node.right) {
        p.next = node.right
        p = p.next
      }
      node = node.next
    }
    head = dummy.next
    dummy.next = null
    p = dummy
  }
  return root
}

// @lc code=end
