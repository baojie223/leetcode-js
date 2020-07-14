/**
 * @param {number} n
 * @return {number}
 */
var numWays = function (n) {
  if (n <= 3) return n
  let a = 2, b = 3, sum = 0
  const N = 1e9 + 7
  for (let i = 4; i < n; i++) {
    sum = (a % N + b % N) % N
    a = b
    b = sum
  }
  return sum
};
