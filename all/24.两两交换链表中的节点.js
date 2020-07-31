/*
 * @lc app=leetcode.cn id=24 lang=javascript
 *
 * [24] 两两交换链表中的节点
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
var swapPairs = function (head) {
  // 迭代
  // if (!head || !head.next) return head
  // const dummy = new ListNode(0)
  // dummy.next = head
  // let p1 = dummy,
  //   p2 = dummy.next.next
  // while (p2) {
  //   const pt = p1.next
  //   pt.next = p2.next
  //   p1.next = p2
  //   p2.next = pt
  //   p1 = pt
  //   p2 = p1.next && p1.next.next
  // }
  // return dummy.next

  // 递归
  if (!head || !head.next) return head
  let p1 = head,
    p2 = head.next
  p1.next = swapPairs(p2.next)
  p2.next = p1
  return p2
}
// @lc code=end
