class ListNode {
  val
  next
  constructor(val, next) {
    this.val = val === undefined ? 0 : val
    this.next = next === undefined ? null : next
  }
}

function removeNthFromEnd(head, n) {
  const dummy = new ListNode(undefined, head)
  let len = 0
  let p = dummy
  while (p && p.next) {
    p = p.next
    len++
  }
  p = dummy
  while (len > n) {
    p = p.next
    len--
  }
  p.next = p.next.next
  return dummy.next
}

const t = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))))
removeNthFromEnd(t, 2)
