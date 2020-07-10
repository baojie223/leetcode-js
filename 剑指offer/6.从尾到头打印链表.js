/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {number[]}
 */
var reversePrint = function (head) {
  const stack = [];
  while (head) {
    stack.push(head.val);
    head = head.next;
  }
  const res = [];
  while (stack.length) {
    res.push(stack.pop());
  }
  return res;
};
