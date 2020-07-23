/*
 * @lc app=leetcode.cn id=2 lang=javascript
 *
 * [2] 两数相加
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  // 时间: O(max(m, n)), 空间: O(max(m, n))
  const dummyHead = new ListNode(-1)
  let p = l1,
    q = l2,
    curr = dummyHead
  let carry = 0
  while (p || q) {
    const x = p ? p.val : 0
    const y = q ? q.val : 0
    const sum = x + y + carry
    carry = Math.floor(sum / 10)
    curr.next = new ListNode(sum % 10)
    curr = curr.next
    if (p) p = p.next
    if (q) q = q.next
  }
  if (carry) {
    curr.next = new ListNode(carry)
  }
  return dummyHead.next
}
