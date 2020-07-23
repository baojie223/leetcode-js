/**
 * @param {number} n
 * @return {number}
 */
var cuttingRope = function (n) {
  if (n <= 3) return n - 1
  let b = n % 3,
    p = 1000000007
  let rem = 1,
    x = 3
  for (let a = n / 3 - 1; a > 0; a = Math.floor(a / 2)) {
    if (a % 2 === 1) rem = (rem * x) % p
    x = (x * x) % p
  }
  if (b == 0) return (rem * 3) % p
  if (b == 1) return (rem * 4) % p
  return (rem * 6) % p
}

// 循环取余法
// function remainder(x, a, p) {
//   let rem = 1
//   let i = 0
//   while (i < a) {
//     rem = (x * rem) % p
//   }
//   return rem
// }

// 快速幂取余法
function remainder(x, a, p) {
  let rem = 1
  while (a > 0) {
    if (a % 2) {
      rem = (rem * x) % p
    }
    x = x ** 2 % p
    a = Math.floor(a / 2)
  }
  return rem
}
