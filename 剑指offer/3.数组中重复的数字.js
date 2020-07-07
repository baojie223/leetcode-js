/**
 * @param {number[]} nums
 * @return {number}
 */
var findRepeatNumber = function (nums) {
  // 1. 先排序，然后遍历，时间O(nlogn)，空间O(1)
  // 2. 遍历存在哈希表中，时间O(n)，空间O(n)
  // 3. 交换元素法，时间O(n)，空间O(1)
  const N = nums.length;
  let i = 0;
  while (i < N) {
    const curr = nums[i];
    if (curr === i) {
      i++;
    } else if (nums[curr] === curr) {
      return curr;
    } else {
      swap(nums, i, curr);
    }
  }
  return -1;
};

function swap(arr, i, j) {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

// 变种
var findRepeatNumber = function (nums) {
  let start = 1,
    end = nums.length - 1;
  while (start <= end) {
    const mid = start + (end - start) / 2;
    const count = countRange(nums, start, mid);
    if (start == end) {
      if (count > 1) {
        return start;
      } else {
        break;
      }
    }
    if (count > mid - start + 1) {
      end = mid;
    } else {
      start = mid + 1;
    }
  }
};

function countRange(nums, start, end) {
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] >= start && nums[i] <= end) {
      count++;
    }
  }
  return count;
}
