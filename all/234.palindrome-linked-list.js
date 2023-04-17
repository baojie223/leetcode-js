/*
 * @lc app=leetcode.cn id=234 lang=javascript
 *
 * [234] Palindrome Linked List
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
 * @return {boolean}
 */
var isPalindrome = function (head) {
  const dummy = new ListNode()
  dummy.next = head
  let p = dummy
  let q = dummy
  while (q.next) {
    p = p.next
    q = q.next
    if (q.next) {
      q = q.next
    }
  }
  p.next = traverse(p.next)
  const mid = p
  q = p.next
  p = dummy.next
  while (p && q) {
    if (p.val !== q.val) return false
    p = p.next
    q = q.next
  }
  mid.next = traverse(mid.next)
  return true

  function traverse(node) {
    if (!node) return null
    if (!node.next) return node
    const result = traverse(node.next)
    node.next.next = node
    node.next = null
    return result
  }
}
// @lc code=end
