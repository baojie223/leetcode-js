/*
 * @lc app=leetcode.cn id=109 lang=javascript
 *
 * [109] 有序链表转换二叉搜索树
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
var sortedListToBST = function (head) {
  const a = []
  for (; head; head = head.next) a.push(head.val)
  return toBst(a, 0, a.length - 1)
}

function toBst(a, lo, hi) {
  if (lo > hi) return null
  const mid = Math.floor(lo + (hi - lo) / 2)
  return new TreeNode(a[mid], toBst(a, lo, mid - 1), toBst(a, mid + 1, hi))
}
// @lc code=end
