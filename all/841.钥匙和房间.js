/*
 * @lc app=leetcode.cn id=841 lang=javascript
 *
 * [841] 钥匙和房间
 */

// @lc code=start
/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
var canVisitAllRooms = function (rooms) {
  return dfs(rooms, 0)
}

function dfs(rooms, index, path = []) {
  path.push(index)
  if (rooms.length === path.length) return true
  const keys = rooms[index]
  for (let i = 0; i < keys.length; i++) {
    if (path.includes(keys[i])) continue
    if (dfs(rooms, keys[i], path)) return true
  }
  return false
}
// @lc code=end

canVisitAllRooms([[2, 3], [], [2], [1, 3, 1]])
