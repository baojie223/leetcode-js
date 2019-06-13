/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
	const res = nums
		.map((num, i) => {
    	const j = nums.findIndex(n => n === target - num)
    	return j === -1 || j === i ? '' : [i, j]
		})
		.filter(item => item)
	return res[0]
}
