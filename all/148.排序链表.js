/*
 * @lc app=leetcode.cn id=148 lang=javascript
 *
 * [148] 排序链表
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
 * @param {ListNode} head
 * @return {ListNode}
 */
var sortList = function (head) {
  return sort(head, null)
}
function sort(head, tail) {
  if (!head) {
    return head
  }
  if (head.next === tail) {
    head.next = null
    return head
  }
  let slow = head,
    fast = head
  while (fast !== tail) {
    slow = slow.next
    fast = fast.next
    if (fast !== tail) {
      fast = fast.next
    }
  }
  return merge(sort(head, slow), sort(slow, tail))
}

function merge(l1, l2) {
  if (!l1) {
    return l2
  } else if (!l2) {
    return l1
  } else if (l1.val < l2.val) {
    const next = merge(l1.next, l2)
    l1.next = next
    return l1
  } else {
    const next = merge(l1, l2.next)
    l2.next = next
    return l2
  }
}
// @lc code=end
