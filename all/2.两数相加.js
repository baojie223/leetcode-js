/*
 * @lc app=leetcode.cn id=2 lang=javascript
 *
 * [2] 两数相加
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

const listToStr = list => {
  let str = ''
  let li = list
  while (li) {
    str = str + li.val
    li = li.next
  }
  str = str
    .split('')
    .reverse()
    .join('')
  return str
}

const numberToList = number => {
	let num = number
	let arr = num
		.toString()
		.split('')
	let listNode = new ListNode(arr.shift())
	return arr.reduce((prev, next) => {
		let li = new ListNode(next)
		li.next = prev
		return li
	}, listNode)
}

const addTwoStr = (str1, str2) => {
	
} 

var addTwoNumbers = function(l1, l2) {
	const sum = listToNumber(l1) + listToNumber(l2)
	return numberToList(sum)
}
