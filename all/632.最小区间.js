/*
 * @lc app=leetcode.cn id=632 lang=javascript
 *
 * [632] 最小区间
 */

// @lc code=start
/**
 * @param {number[][]} nums
 * @return {number[]}
 */
var smallestRange = function (nums) {
  const countMap = {}
  for (let  i = 0 ; i < nums.length ; i++) {
    countMap[i] = nums[i].length
  }
  



  let allNums = []
  let map = {}
  for (let i = 0; i < nums.length; i++) {
    map[i] = 0 // 初始化出现次数
    for (let j = 0; j < nums[i].length; j++) {
      allNums.push({
        num: nums[i][j], // 数值本身
        type: i, // 来源于哪个数组
      })
    }
  }
  allNums.sort((a, b) => a.num - b.num)
  let left = 0
  let count = 0
  let minLen = Infinity
  let minStart = 0
  for (let right = 0; right < allNums.length; right++) {
    // 主旋律定为扩张
    if (map[allNums[right].type] == 0) count++ // 纳入了之前没纳入的目标数字，count++
    map[allNums[right].type]++ // 纳入数字，对应的出现次数+1
    while (count == nums.length && left <= right) {
      // 找齐所有目标数字，且区间不被破坏的前提下收缩
      if (allNums[right].num - allNums[left].num < minLen) {
        // 出现了比minLen更小的解
        minLen = allNums[right].num - allNums[left].num // 更新minLen
        minStart = allNums[left].num // 更新minStart
      }
      map[allNums[left].type]-- // 收缩之前更新一下map
      if (map[allNums[left].type] == 0) count-- // map对应的数字出现次数减为0，count--
      left++ // 收缩窗口
    }
  }
  return [minStart, minStart + minLen]
}

function findMin(nums) {
  let min = Number.MAX_SAFE_INTEGER
  for (let num of nums) {
    min = Math.min(min, num[0])
  }
  return min
}

function findMax(nums) {
  let max = Number.MIN_SAFE_INTEGER
  for (let num of nums) {
    max = Math.max(max, num[num.length - 1])
  }
  return max
}

function checkAll(nums, left, right) {
  for (let i = nums.length - 1; i >= 0; i--) {
    const num = nums[i]
    if (!check(num, left, right)) {
      return false
    }
  }
  return true
}

function check(num, left, right) {
  if (num[num.length - 1] < left || num[0] > right) return false
  for (let i = num.length - 1; i >= 0; i--) {
    const n = num[i]
    if (n >= left && n <= right) {
      return true
    }
  }
  return false
}
// @lc code=end

smallestRange([
  [4, 10, 15, 24, 26],
  [0, 9, 12, 20],
  [5, 18, 22, 30],
])
// [20, 24]
