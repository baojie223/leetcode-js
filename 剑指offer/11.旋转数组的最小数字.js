/**
 * @param {number[]} numbers
 * @return {number}
 */
var minArray = function (numbers) {
  let i = 0,
    j = numbers.length - 1,
    m = 0
  while (i < j) {
    m = Math.floor(i + (j - i) / 2)
    if (numbers[m] < numbers[j]) {
      j = m
    } else if (numbers[m] > numbers[j]) {
      i = m + 1
    } else {
      j--
    }
  }
  return numbers[i]
}
