/*
 * @lc app=leetcode.cn id=315 lang=javascript
 *
 * [315] 计算右侧小于当前元素的个数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var countSmaller = function (nums) {
  // 暴力破解，两层循环，O(n2)
  const counts = [];
  for (let i = 0; i < nums.length; i++) {
    let n = 0;
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] < nums[i]) n++;
    }
    counts.push(n);
  }
  return counts;

  // 归并排序
  // const len = nums.length;
  // if (!len) return [];

  // const counts = Array(len).fill(0);
  // const aux = [];
  // const indexes = Array(len)
  //   .fill('')
  //   .map((_, index) => index);

  // function merge(a, low, mid, high) {
  //   let i = low,
  //     j = mid + 1;
  //   for (let k = low; k <= high; k++) {
  //     aux[k] = indexes[k];
  //   }
  //   for (let k = low; k <= high; k++) {
  //     if (i > mid) {
  //       indexes[k] = aux[j++];
  //     } else if (j > high) {
  //       indexes[k] = aux[i++];
  //       counts[indexes[k]] += high - mid;
  //     } else if (a[aux[i]] < a[aux[j]]) {
  //       indexes[k] = aux[i++];
  //       counts[indexes[k]] += j - mid - 1;
  //     } else {
  //       indexes[k] = aux[j++];
  //     }
  //   }
  // }

  // function sort(a, low, high) {
  //   if (low >= high) return;
  //   const mid = Math.floor(low + (high - low) / 2);
  //   sort(a, low, mid);
  //   sort(a, mid + 1, high);
  //   if (a[mid] > a[mid + 1]) {
  //     merge(a, low, mid, high);
  //   }
  // }

  // function mergeSort(a) {
  //   sort(a, 0, a.length - 1);
  // }

  // mergeSort(nums);
  // return counts;
};
// @lc code=end

countSmaller([5, 2, 6, 1]);
