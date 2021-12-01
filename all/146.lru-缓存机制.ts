/*
 * @lc app=leetcode.cn id=146 lang=typescript
 *
 * [146] LRU 缓存机制
 */

// @lc code=start
class LRUCache {
  cache: Map<number, DLinkedNode>
  capacity: number
  head: DLinkedNode
  tail: DLinkedNode

  constructor(capacity: number) {
    this.cache = new Map()
    this.capacity = capacity
    this.head = new DLinkedNode()
    this.tail = new DLinkedNode()
    this.head.next = this.tail
    this.tail.prev = this.head
  }

  get(key: number): number {
    if (!this.cache.has(key)) {
      return -1
    }
    const node = this.cache.get(key)
    this.moveToHead(node)
    return node.value
  }

  put(key: number, value: number): void {
    if (this.cache.has(key)) {
      const node = this.cache.get(key)
      node.value = value
      this.moveToHead(node)
    } else {
      const node = new DLinkedNode(key, value)
      this.addToHead(node)
      if (this.cache.size === this.capacity) {
        const removedNode = this.removeTail()
        this.cache.delete(removedNode.key)
      }
      this.cache.set(key, node)
    }
  }

  moveToHead(node: DLinkedNode) {
    this.removeNode(node)
    this.addToHead(node)
  }

  removeNode(node: DLinkedNode) {
    node.prev.next = node.next
    node.next.prev = node.prev
  }

  addToHead(node: DLinkedNode) {
    this.head.next.prev = node
    node.next = this.head.next
    this.head.next = node
    node.prev = this.head
  }

  removeTail() {
    const node = this.tail.prev
    this.removeNode(node)
    return node
  }
}

class DLinkedNode {
  key: number
  value: number
  prev: DLinkedNode
  next: DLinkedNode

  constructor(_key?: number, _value?: number) {
    this.key = _key
    this.value = _value
    this.prev = null
    this.next = null
  }
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
// @lc code=end
