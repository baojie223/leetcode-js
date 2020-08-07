/*
 * @lc app=leetcode.cn id=31 lang=javascript
 *
 * [31] 下一个排列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function (nums) {
  const n = nums.length
  if (n <= 1) return
  let i = n - 1
  while (i > 0 && nums[i] <= nums[i - 1]) i--
  if (i === 0) {
    sort(nums, 0, n - 1)
    return
  }
  let min = findMin(nums, i - 1, n - 1)
  exch(nums, i - 1, min)
  sort(nums, i, n - 1)
}

function sort(a, lo, hi) {
  if (hi <= lo) return
  const j = partition(a, lo, hi)
  sort(a, lo, j - 1)
  sort(a, j + 1, hi)
}

function partition(a, lo, hi) {
  let i = lo,
    j = hi + 1
  const v = a[lo]
  while (true) {
    while (less(a[++i], v)) if (i === hi) break
    while (less(v, a[--j])) if (j === lo) break
    if (i >= j) break
    exch(a, i, j)
  }
  exch(a, j, lo)
  return j
}

function less(v, w) {
  return v < w
}

function exch(a, i, j) {
  const t = a[i]
  a[i] = a[j]
  a[j] = t
}

function findMin(nums, i, j) {
  const target = nums[i++]
  let min = i
  while (i <= j) {
    if (nums[i] < nums[min] && nums[i] > target) {
      min = i
    }
    i++
  }
  return min
}
// @lc code=end

nextPermutation([1, 3, 2])
