/**
 * @param {number} n
 * @return {number}
 */
var cuttingRope = function (n) {
  // 贪心
  let count = Math.floor(n / 3)
  let remainder = n % 3
  if (remainder === 0) {
    if (count === 1) return 1 * 2
    return Math.pow(3, count)
  }
  if (remainder === 1) {
    return Math.pow(3, count - 1) * 2 * 2
  }
  if (remainder === 2) {
    if (count === 0) return 1 * 1
    return Math.pow(3, count) * 2
  }
}
