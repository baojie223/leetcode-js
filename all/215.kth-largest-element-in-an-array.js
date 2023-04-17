/*
 * @lc app=leetcode.cn id=215 lang=javascript
 *
 * [215] Kth Largest Element in an Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
// 优先队列
var findKthLargest = function (nums, k) {
  // 构造完整的堆，再取TopK
  const maxPQ = new MaxPQ(nums.length)
  for (const num of nums) {
    maxPQ.insert(num)
  }
  while (k > 1) {
    maxPQ.delMax()
    k--
  }
  return maxPQ.max()
}

class MaxPQ {
  constructor(maxN) {
    this.pq = new Array(maxN + 1)
    this.N = 0
  }

  isEmpty() {
    return this.N === 0
  }

  size() {
    return this.N
  }

  insert(v) {
    this.pq[++this.N] = v
    this.swim(this.N)
  }

  delMax() {
    let max = this.pq[this.N]
    this.exch(1, this.N--)
    this.pq[this.N + 1] = null
    this.sink(1)
    return max
  }

  swim(k) {
    while (k > 1 && this.less(k >> 1, k)) {
      this.exch(k >> 1, k)
      k = k >> 1
    }
  }

  sink(k) {
    while (2 * k <= this.N) {
      let j = 2 * k
      if (j < this.N && this.less(j, j + 1)) j++
      if (!this.less(k, j)) break
      this.exch(k, j)
      k = j
    }
  }

  exch(i, j) {
    const t = this.pq[i]
    this.pq[i] = this.pq[j]
    this.pq[j] = t
  }

  less(i, j) {
    return this.pq[i] < this.pq[j]
  }

  max() {
    return this.pq[1]
  }
}

// 快速选择
// var findKthLargest = function (nums, k) {
//   return quickSelect(nums, 0, nums.length - 1, nums.length - k)

//   function quickSelect(array, l, r, target) {
//     while (true) {
//       let pos = randomPartition(array, l, r)
//       if (pos < target) {
//         l = pos + 1
//       } else if (pos > target) {
//         r = pos - 1
//       } else {
//         return array[pos]
//       }
//     }
//   }

//   function randomPartition(array, low, high) {
//     const randomIndex = low + Math.floor(Math.random() * (high - low + 1))
//     swap(array, low, randomIndex)
//     return partition(array, low, high)
//   }

//   function partition(array, low, high) {
//     let i = low
//     let j = high + 1
//     let pivot = array[low]
//     while (true) {
//       while (array[++i] < pivot) {
//         if (i === high) {
//           break
//         }
//       }
//       while (pivot < array[--j]) {
//         if (j === low) {
//           break
//         }
//       }
//       if (i >= j) break
//       swap(array, i, j)
//     }
//     swap(array, low, j)
//     return j
//   }

//   function swap(array, i, j) {
//     const temp = array[i]
//     array[i] = array[j]
//     array[j] = temp
//   }
// }
// @lc code=end
