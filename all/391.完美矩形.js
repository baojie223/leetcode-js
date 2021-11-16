/*
 * @lc app=leetcode.cn id=391 lang=javascript
 *
 * [391] 完美矩形
 */

// @lc code=start
/**
 * @param {number[][]} rectangles
 * @return {boolean}
 */
var isRectangleCover = function (rectangles) {
  let minX = Number.MAX_SAFE_INTEGER
  let minY = Number.MAX_SAFE_INTEGER
  let maxA = Number.MIN_SAFE_INTEGER
  let maxB = Number.MIN_SAFE_INTEGER
  let area = 0
  let maxArea = 0
  const cornerSet = new Set()

  const getCorners = (rectangle) => {
    const [x, y, a, b] = rectangle
    const lt = `${x}_${b}`
    const rt = `${a}_${b}`
    const rb = `${a}_${y}`
    const lb = `${x}_${y}`
    for (let j = 0; j < 4; j++) {
      const corner = [lt, rt, rb, lb][j]
      if (cornerSet.has(corner)) {
        cornerSet.delete(corner)
      } else {
        cornerSet.add(corner)
      }
    }
  }
  const getArea = (rectangle) => {
    const [x, y, a, b] = rectangle
    minX = Math.min(minX, x)
    minY = Math.min(minY, y)
    maxA = Math.max(maxA, a)
    maxB = Math.max(maxB, b)
    area += (a - x) * (b - y)
  }
  const isCornersRight = () => {
    return (
      cornerSet.size === 4 &&
      cornerSet.has(`${minX}_${maxB}`) &&
      cornerSet.has(`${maxA}_${maxB}`) &&
      cornerSet.has(`${maxA}_${minY}`) &&
      cornerSet.has(`${minX}_${minY}`)
    )
  }
  const isAreaEqual = () => {
    maxArea = (maxA - minX) * (maxB - minY)
    return maxArea === area
  }
  for (let i = 0; i < rectangles.length; i++) {
    getCorners(rectangles[i])
    getArea(rectangles[i])
  }
  return isAreaEqual() && isCornersRight()
}
// @lc code=end

isRectangleCover([
  [1, 1, 3, 3],
  [3, 1, 4, 2],
  [3, 2, 4, 4],
  [1, 3, 2, 4],
  [2, 3, 3, 4],
])
