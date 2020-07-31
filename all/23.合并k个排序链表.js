/*
 * @lc app=leetcode.cn id=23 lang=javascript
 *
 * [23] 合并K个排序链表
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
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
  // 两两合并, 再推入lists中
  // while (lists.length > 1) {
  //   const a = lists.shift()
  //   const b = lists.shift()
  //   lists.push(mergeTwoLists(a, b))
  // }
  // return lists[0] || null

  // 分治
  if (!lists.length) return null
  return merge(lists, 0, lists.length - 1)
}

function merge(lists, left, right) {
  if (left === right) return lists[left]
  const mid = Math.floor(left + (right - left) / 2)
  const a = merge(lists, left, mid)
  const b = merge(lists, mid + 1, right)
  return mergeTwoLists(a, b)
}

function mergeTwoLists(a, b) {
  if (!a) return b
  if (!b) return a
  if (a.val <= b.val) {
    a.next = mergeTwoLists(a.next, b)
    return a
  } else {
    b.next = mergeTwoLists(a, b.next)
    return b
  }
}
// @lc code=end
