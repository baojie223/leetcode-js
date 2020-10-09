/*
 * @lc app=leetcode.cn id=141 lang=javascript
 *
 * [141] 环形链表
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
 * @return {boolean}
 */
var hasCycle = function(head) {
  // 1. 用数组保存遍历过的值
  // 2. 快慢指针
  
  let fast = head, slow = head
  while (fast && slow) {
    if (fast.next && fast.next.next) {
      fast = fast.next.next
    } else {
      return false
    }

    if (slow.next) {
      slow = slow.next
    } else {
      return false
    }

    if (fast === slow) return true
  }
  return false
}
// @lc code=end
