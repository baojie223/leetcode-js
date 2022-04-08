class ListNode {
  val
  next
  constructor(val, next) {
    this.val = val === undefined ? 0 : val
    this.next = next === undefined ? null : next
  }
}

function mergeKLists(lists) {
  const n = lists.length
  let i = n - 1
  while (i > 0) {
    if (i % 2 === 0) {
      const mid = i / 2
      for (let j = 0; j < mid; j++) {
        lists[j] = merge2Lists(lists[j], lists[j + mid + 1])
      }
      i = mid
    } else {
      const mid = Math.ceil(i / 2)
      for (let j = 0; j < mid; j++) {
        lists[j] = merge2Lists(lists[j], lists[j + mid])
      }
      i = mid - 1
    }
  }
  return lists[0]
}

function merge2Lists(list1, list2) {
  let p1 = list1
  let p2 = list2
  const dummy = new ListNode()
  let q = dummy
  while (p1 || p2) {
    if (!p1) {
      q.next = p2
      p2 = p2.next
    } else if (!p2) {
      q.next = p1
      p1 = p1.next
    } else if (p1.val > p2.val) {
      q.next = p2
      p2 = p2.next
    } else {
      q.next = p1
      p1 = p1.next
    }
    q.next.next = null
    q = q.next
  }
  return dummy.next
}

// [[1,4,5],[1,3,4],[2,6]]
mergeKLists([
  new ListNode(1, new ListNode(4, new ListNode(5))),
  new ListNode(1, new ListNode(3, new ListNode(4))),
  new ListNode(2, new ListNode(6)),
])
