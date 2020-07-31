/*
 * @lc app=leetcode.cn id=19 lang=javascript
 *
 * [19] 删除链表的倒数第N个节点
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
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  // 先获取长度, 再顺序遍历
  // let len = 0
  // let p = new ListNode(null)
  // p.next = head
  // while (p.next) {
  //   len++
  //   p = p.next
  // }
  // if (len === n) return head.next
  // const find = len - n
  // let i = 0
  // p = new ListNode(null)
  // p.next = head
  // while (i < find) {
  //   p = p.next
  //   i++
  // }
  // p.next = p.next.next
  // return head

  // 双指针
  const dummy = new ListNode(0)
  dummy.next = head
  let first = dummy,
    second = dummy
  let i = 0
  while (i < n + 1) {
    second = second.next
    i++
  }
  while (second !== null) {
    first = first.next
    second = second.next
  }
  first.next = first.next.next
  return dummy.next
}
// @lc code=end
