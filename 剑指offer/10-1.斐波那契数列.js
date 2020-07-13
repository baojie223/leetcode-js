/**
 * @param {number} n
 * @return {number}
 */
var fib = function (n) {
  if (n <= 1) return n;
  let prev = 0,
    curr = 1, sum = 0;
  const N = 1e9 + 7;
  for (let i = 2; i <= n; i++) {
    sum = (prev % N + curr % N) % N
    prev = curr
    curr = sum
  }
  return curr;
};

fib(81);
