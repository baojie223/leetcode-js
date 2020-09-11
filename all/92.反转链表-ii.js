/*
 * @lc app=leetcode.cn id=92 lang=javascript
 *
 * [92] 反转链表 II
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
var reverseBetween = function (head, m, n) {
  const dummy = new ListNode(0)
  dummy.next = head
  
  let prev = dummy,
    curr = dummy.next,
    con,
    tail

  while (m > 1) {
    prev = curr
    curr = curr.next
    m--
    n--
  }
  con = prev

  while (n > 0) {
    const tmp = curr.next
    curr.next = prev
    prev = curr
    curr = tmp
    n--
  }
  tail = curr

  con.next.next = tail
  con.next = prev

  return dummy.next
}
// @lc code=end
