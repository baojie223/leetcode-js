/*
 * @lc app=leetcode.cn id=82 lang=javascript
 *
 * [82] 删除排序链表中的重复元素 II
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
var deleteDuplicates = function (head) {
  const dummy = new ListNode(NaN)
  dummy.next = head
  let p1 = dummy, p2 = head
  while (p2) {
    while (p2.next && p2.val !== p2.next.val) {
      p1 = p2
      p2 = p2.next
    }
    while (p2.next && p2.val === p2.next.val) {
      p2 = p2.next
    }
    if (!p2.next) {
      if (p1.next !== p2) p1.next = null
      break
    }
    p2 = p2.next
    p1.next = p2
  }
  return dummy.next
}
// @lc code=end
