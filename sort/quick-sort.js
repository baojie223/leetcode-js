function sort(a, lo, hi) {
  if (lo >= hi) {
    return
  }
  const j = partition(a, lo, hi)
  sort(a, lo, j - 1)
  sort(a, j + 1, hi)
}

function partition(a, lo, hi) {
  let i = lo
  let j = hi + 1
  while (true) {
    const v = a[lo]
    while (less(a[++i], v)) {
      if (i === hi) {
        break
      }
    }
    while (less(v, a[--j])) {
      if (j === lo) {
        break
      }
    }
    if (i >= j) {
      break
    }
    exch(a, i, j)
  }
  exch(a, lo, j)
  return j
}

function less(a, b) {
  return a < b
}

function exch(a, i, j) {
  const temp = a[i]
  a[i] = a[j]
  a[j] = temp
}