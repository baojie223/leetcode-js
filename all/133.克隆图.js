/*
 * @lc app=leetcode.cn id=133 lang=javascript
 *
 * [133] 克隆图
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function (node) {
  return dfs(node)
}

function dfs(node, visited = new Map()) {
  if (!node) return null
  if (visited.has(node)) return visited.get(node)
  const cloneNode = new Node(node.val)
  visited.set(node, cloneNode)
  for (let neighbor of node.neighbors) {
    cloneNode.neighbors.push(dfs(neighbor, visited))
  }
  return cloneNode
}
// @lc code=end

function Node(val, neighbors) {
  this.val = val === undefined ? 0 : val
  this.neighbors = neighbors === undefined ? [] : neighbors
}

const node1 = new Node(1)
const node2 = new Node(2)
const node3 = new Node(3)
const node4 = new Node(4)

node1.neighbors = [node2, node4]
node2.neighbors = [node1, node3]
node3.neighbors = [node2, node4]
node4.neighbors = [node1, node3]

const a = cloneGraph(node1)
