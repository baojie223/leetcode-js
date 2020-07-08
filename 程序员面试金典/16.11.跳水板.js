/**
 * @param {number} shorter
 * @param {number} longer
 * @param {number} k
 * @return {number[]}
 */
var divingBoard = function (shorter, longer, k) {
  if (k === 0) return [];
  let diff = longer - shorter;
  if (diff === 0) return [shorter * k];
  let i = 0;
  let res = [];
  while (i < k + 1) {
    res.push(shorter * k + diff * i);
    i++;
  }
  return res;
};
