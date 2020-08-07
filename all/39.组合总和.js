/*
 * @lc app=leetcode.cn id=39 lang=javascript
 *
 * [39] 组合总和
 */

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  // 先排序, 方便去重
  candidates.sort((a, b) => b - a)
  const path = [],
    ans = []
  backtrack(target, path, candidates, ans)
  return ans
}

// 实质上就是树的遍历, target是当前节点要达到的目标值, path是当前的路径
function backtrack(target, path, candidates, ans) {
  // target < 0 这条路结束
  if (target < 0) return
  // target = 0 找到一个方案, 生成快照放入ans中
  if (target === 0) {
    ans.push([...path])
    return
  }
  // 对每个备选节点进行回溯操作
  for (let i = 0; i < candidates.length; i++) {
    const val = candidates[i]
    path.push(val)
    // 由于排过序了, 所以备选路径只需要当前节点和之后的节点
    backtrack(target - val, path, candidates.slice(i), ans)
    path.pop()
  }
}
// @lc code=end

combinationSum([2, 3, 6, 7], 7)
