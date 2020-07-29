/**
 * @param {string[]} maze
 * @return {number}
 */
var minimalSteps = function (maze) {
  const m = maze.length,
    n = maze[0].length
  const di = [-1, 1, 0, 0],
    dj = [0, 0, -1, 1]
  const buttons = [],
    stones = []
  let s = { i: -1, j: -1 },
    t = { i: -1, j: -1 }
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (maze[i][j] === 'S') s = { i, j }
      if (maze[i][j] === 'T') t = { i, j }
      if (maze[i][j] === 'M') buttons.push({ i, j })
      if (maze[i][j] === 'O') stones.push({ i, j })
    }
  }

  const nb = buttons.length,
    ns = stones.length

  const startDist = bfs(s)

  if (!nb) return startDist[t.i][t.j]

  const buttonDist = []
  for (let i = 0; i < nb; i++) {
    const dist = bfs(buttons[i])
    buttonDist[i] = dist
  }

  return

  // 求 i, j 到所有点的距离
  function bfs({ i, j }) {
    const queue = []
    const ans = new Array(m).fill(null).map(() => new Array(n).fill(-1))
    queue.push({ i, j })
    ans[i][j] = 0
    while (queue.length) {
      const curr = queue.shift()
      for (let k = 0; k < 4; k++) {
        const newi = curr.i + di[k],
          newj = curr.j + dj[k]
        if (inBound(newi, newj) && maze[newi][newj] !== '#' && ans[newi][newj] === -1) {
          queue.push({ i: newi, j: newj })
          ans[newi][newj] = ans[i][j] + 1
        }
      }
    }
    return ans
  }

  // 判断边界
  function inBound(i, j) {
    return i >= 0 && i <= m && j >= 0 && j <= n
  }
}


