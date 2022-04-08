function sort(a, lo, hi) {
  if (hi <= lo) {
    return
  }
  const mid = lo + Math.floor((hi - lo) / 2)
  sort(a, lo, mid)
  sort(a, mid + 1, hi)
  merge(a, lo, mid, hi)
}

function merge(a, lo, mid, hi) {
  let i = lo
  let j = mid + 1
  const aux = [...a]
  for (let k = lo; k <= hi; k++) {
    if (i > mid) {
      a[k] = aux[j++]
    } else if (j > hi) {
      a[k] = aux[i++]
    } else if (aux[j] < aux[i]) {
      a[k] = aux[j++]
    } else {
      a[k] = aux[i++]
    }
  }
}