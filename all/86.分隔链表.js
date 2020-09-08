/*
 * @lc app=leetcode.cn id=86 lang=javascript
 *
 * [86] 分隔链表
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
 * @param {number} x
 * @return {ListNode}
 */
// function ListNode(val) {
//   this.val = val
//   this.next = null
// }
var partition = function (head, x) {
  const d1 = new ListNode(0),
    d2 = new ListNode(0)
  let p = head,
    p1 = d1,
    p2 = d2
  while (p) {
    if (p.val < x) {
      p1.next = p
      p1 = p1.next
    } else {
      p2.next = p
      p2 = p2.next
    }
    p = p.next
  }
  p1.next = d2.next
  p2.next = null
  return d1.next
}
// @lc code=end

const p1 = new ListNode(1)
const p2 = new ListNode(4)
const p3 = new ListNode(3)
const p4 = new ListNode(2)
const p5 = new ListNode(5)
const p6 = new ListNode(2)

p1.next = p2
p2.next = p3
p3.next = p4
p4.next = p5
p5.next = p6

partition(p1, 3)
