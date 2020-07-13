/*
 * @lc app=leetcode.cn id=350 lang=javascript
 *
 * [350] 两个数组的交集 II
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
  // 哈希表，时间O(m + n) 空间O(min(m, n))
  if (nums1.length > nums2.length) return intersect(nums2, nums1);

  const map1 = {};
  const res = [];
  for (const num of nums1) {
    if (!map1[num]) map1[num] = 0;
    map1[num]++;
  }
  for (const num of nums2) {
    if (map1[num] > 0) {
      res.push(num);
      map1[num]--;
    }
  }
  return res;

  // 排序加双指针法，时间O(mlogm + nlogn)，空间O(1)
  // nums1.sort((a, b) => (a < b ? -1 : a === b ? 0 : 1));
  // nums2.sort((a, b) => (a < b ? -1 : a === b ? 0 : 1));
  // let i = 0,
  //   j = 0;
  // const res = [];
  // while (i < nums1.length && j < nums2.length) {
  //   if (nums1[i] === nums2[j]) {
  //     res.push(nums1[i]);
  //     i++;
  //     j++;
  //   } else if (nums1[i] < nums2[j]) {
  //     i++;
  //   } else if (nums1[i] > nums2[j]) {
  //     j++;
  //   }
  // }
  // return res;
};
// @lc code=end
