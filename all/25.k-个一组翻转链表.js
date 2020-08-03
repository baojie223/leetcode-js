/*
 * @lc app=leetcode.cn id=25 lang=javascript
 *
 * [25] K 个一组翻转链表
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
var reverseKGroup = function (head, k) {
  let dummy = new ListNode(0)
  dummy.next = head
  let p = dummy,
    pre = null,
    count = 0
  while (p.next && count <= k) {
    pre = p
    p = p.next
    count++
  }
  if (count < k) {
    return head
  }
  if (count === k) {
    const [h] = reverse(head)
    return h
  }
  pre.next = null
  const [h, t] = reverse(head)
  const b = reverseKGroup(p, k)
  t.next = b
  return h
}

function reverse(root) {
  if (!root) return [null, null]
  if (!root.next) return [root, root]
  if (!root.next.next) {
    const tmp = root.next
    root.next.next = root
    root.next = null
    return [tmp, root]
  }
  const [head, tail] = reverse(root.next)
  tail.next = root
  root.next = null
  return [head, root]
}
// @lc code=end
