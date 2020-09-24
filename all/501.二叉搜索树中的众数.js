/*
 * @lc app=leetcode.cn id=501 lang=javascript
 *
 * [501] 二叉搜索树中的众数
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
// Morris中序遍历, 时间O(n), 空间O(1)
var findMode = function (root) {
  let base = NaN,
    count = 0,
    maxCount = 0,
    ans = []

  const update = (x) => {
    if (x === base) {
      count++
    } else {
      base = x
      count = 1
    }
    if (count === maxCount) {
      ans.push(base)
    }
    if (count > maxCount) {
      maxCount = count
      ans = [base]
    }
  }

  const morrisInorder = (root) => {
    let pre = null,
      cur = root
    while (cur) {
      if (!cur.left) {
        update(cur.val)
        cur = cur.right
      } else {
        pre = cur.left
        while (pre.right && pre.right !== cur) {
          pre = pre.right
        }
        if (!pre.right) {
          pre.right = cur
          cur = cur.left
        } else {
          pre.right = null
          update(cur.val)
          cur = cur.right
        }
      }
    }
  }

  morrisInorder(root)
  return ans
}

// 蠢比做法
// var findMode = function (root) {
//   const map = {},
//     res = []
//   dfs(root, map)
//   let max = -Infinity
//   for (let key in map) if (map[key] > max) max = map[key]
//   for (let key in map) if (map[key] === max) res.push(key)
//   return res
// }

// function dfs(root, map) {
//   if (!root) return
//   if (!map[root.val]) map[root.val] = 0
//   map[root.val]++
//   dfs(root.left, map)
//   dfs(root.right, map)
// }
// @lc code=end
