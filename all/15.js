function threeSum(nums) {
  const n = nums.length
  nums.sort((a, b) => (a - b > 0 ? 1 : -1))
  const ans = []
  for (let i = 0; i < n; i++) {
    if (nums[i] > 0) break
    if (i !== 0 && nums[i] === nums[i - 1]) continue
    let j = i + 1
    let k = n - 1
    while (j < k) {
      if (j !== i + 1 && nums[j] === nums[j - 1]) {
        j++
        continue
      }
      if (k !== n - 1 && nums[k] === nums[k + 1]) {
        k--
        continue
      }
      if (nums[j] + nums[k] < -nums[i]) {
        j++
      } else if (nums[j] + nums[k] > -nums[i]) {
        k--
      } else {
        ans.push([i, j, k])
        j++
        k--
      }
    }
  }
  return ans
}

threeSum([-1,0,1,2,-1,-4])