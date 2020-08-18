/*
 * @lc app=leetcode.cn id=61 lang=javascript
 *
 * [61] 旋转链表
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
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function (head, k) {
  const dummy = new ListNode(0)
  dummy.next = head
  let p = dummy,
    len = 0
  while (p.next) {
    p = p.next
    len++
  }
  p.next = dummy.next
  let step = len - (k % len)
  while (step) {
    p = p.next
    step--
  }
  const ans = p.next
  p.next = null
  return ans
}
// @lc code=end
