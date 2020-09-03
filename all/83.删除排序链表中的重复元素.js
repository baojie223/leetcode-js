/*
 * @lc app=leetcode.cn id=83 lang=javascript
 *
 * [83] 删除排序链表中的重复元素
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
    if (p1.val !== p2.val) {
      p1 = p1.next
      p2 = p2.next
    } else {
      p2 = p2.next
      p1.next = p2
    }
  }
  return dummy.next
}
// @lc code=end
