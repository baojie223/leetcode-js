/*
 * @lc app=leetcode.cn id=143 lang=javascript
 *
 * [143] 重排链表
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
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function (head) {
  // 递归
  if (!head) return
  let p = head, len = 0
  while (p) {
    len++
    p = p.next
  }

  const helper = (head, len) => {
    let outTail = null
    if (len === 1) {
      outTail = head.next
      head.next = null
      return outTail
    }
    if (len === 2) {
      outTail = head.next.next
      head.next.next = null
      return outTail
    }
    const tail = helper(head.next, len - 2)
    const tmp = head.next
    head.next = tail
    outTail = tail.next
    tail.next = tmp
    return outTail
  }

  helper(head, len)

  // 使用队列, 时间O(n), 空间O(n)
  // const queue = []
  // while (head) {
  //   queue.push(head)
  //   head = head.next
  // }
  // let dummy = new ListNode(),
  //   p = dummy
  // while (queue.length) {
  //   p.next = queue.shift()
  //   p.next.next = queue.pop() || null
  //   p = p.next.next
  //   if (p) p.next = null
  // }
  // head = dummy.next

  // 暴力破解, 时间O(n2)
  // let p1 = head,
  //   p2 = head,
  //   tmp = null
  // while (p1 && p1.next && p1.next.next) {
  //   while (p2.next && p2.next.next) {
  //     p2 = p2.next
  //   }
  //   tmp = p1.next
  //   p1.next = p2.next
  //   p2.next.next = tmp
  //   p2.next = null
  //   p1 = p1.next.next
  //   p2 = p1
  // }
}
// @lc code=end
