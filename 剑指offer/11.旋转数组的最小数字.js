/**
 * @param {number[]} numbers
 * @return {number}
 */
var minArray = function (numbers) {
  let i = 0,
    j = numbers.length - 1,
    mid = 0;

  while (numbers[i] >= numbers[j]) {
    if (j - i === 1) return numbers[j];
    mid = Math.floor(i + (j - i) / 2);

    if (numbers[mid] === numbers[i] && numbers[mid] === numbers[j]) {
      return minArrayByOrder(numbers, i, j);
    }

    if (numbers[mid] >= numbers[i]) {
      i = mid;
    } else if (numbers[mid] <= numbers[j]) {
      j = mid;
    }
  }
  return numbers[mid];
};

function minArrayByOrder(numbers, left, right) {
  let min = Number.MAX_SAFE_INTEGER;
  for (let i = left; i <= right; i++) {
    min = Math.min(min, numbers[i]);
  }
  return min;
}
