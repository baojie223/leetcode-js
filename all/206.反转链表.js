/*
 * @lc app=leetcode.cn id=206 lang=javascript
 *
 * [206] 反转链表
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
 * @return {ListNode}
 */
var reverseList = function (head) {
  // if (!head || !head.next) {
  //   return head
  // } else {
  //   const newHead = reverseList(head.next)
  //   head.next.next = head
  //   head.next = null
  //   return newHead
  // }

  let prev = null
  let curr = head
  while (curr) {
    const temp = curr.next
    curr.next = prev
    prev = curr
    curr = temp
  }
  return prev
}
// @lc code=end
