/*
 * @lc app=leetcode.cn id=75 lang=javascript
 *
 * [75] 颜色分类
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// 荷兰国旗问题
var sortColors = function (nums) {
  // 常规做法, 遍历2次, 空间复杂度O(1)
  // const n = nums.length
  // const map = [0, 0, 0]
  // for (let i = 0; i < n; i++) map[nums[i]]++
  // let index = 0
  // for (let i = 0; i < n; i++) {
  //   if (map[index] === 0) {
  //     index++
  //     i--
  //     continue
  //   }
  //   nums[i] = index
  //   map[index]--
  // }

  // 三指针法
  const n = nums.length
  let l = 0, r = n - 1, c = 0
  while (c <= r) {
    if (nums[c] === 0) {
      swap(nums, l, c)
      l++
      c++
    } else if (nums[c] === 1) {
      c++
    } else if (nums[c] === 2) {
      swap(nums, c, r)
      r--
    }
  }
}

function swap(a, i, j) {
  const t = a[i]
  a[i] = a[j]
  a[j] = t
}
// @lc code=end

sortColors([2, 0, 2, 1, 1, 0])
