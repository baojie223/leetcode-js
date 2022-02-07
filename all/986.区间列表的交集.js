/*
 * @lc app=leetcode.cn id=986 lang=javascript
 *
 * [986] 区间列表的交集
 */

// @lc code=start
/**
 * @param {number[][]} firstList
 * @param {number[][]} secondList
 * @return {number[][]}
 */
var intervalIntersection = function(firstList, secondList) {
  let i = 0, j = 0
  const ans = []
  while (i < firstList.length && j < secondList.length) {
    const [firstL, firstR] = firstList[i]
    const [secondL, secondR] = secondList[j]
    if (firstL < secondL) {
      if (firstR >= secondL) {
        ans.push([secondL, firstR])
        i++
      } else {
        i++
        continue
      }
    }
  }
};
// @lc code=end

