/*
 * @lc app=leetcode.cn id=126 lang=javascript
 *
 * [126] 单词接龙 II
 */

// @lc code=start
/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {string[][]}
 */
var findLadders = function (beginWord, endWord, wordList) {
  const wordSet = new Set(wordList)
  if (!wordSet.has(endWord)) return []
  if (wordSet.has(beginWord)) wordSet.delete(beginWord)

  const map = new Map()
  let isFinished = false
  bfs(beginWord, endWord, wordSet, map)

  const paths = []
  let min = Infinity
  dfs(beginWord, endWord, map, [beginWord], paths)

  return paths

  function bfs(beginWord, endWord, wordSet, map) {
    const queue = [beginWord], visited = new Set(), a = 'a'.charCodeAt(0)
    while (queue.length) {
      const len = queue.length
      for (let i = 0; i < len; i++) {
        const word = queue.shift()
        for (let j = 0; j < word.length; j++) {
          for (let k = 0; k < 26; k++) {
            if (getChar(k) === word[j]) continue
            const nextWord = replace(word, j, getChar(a + k))
            if (wordSet.has(nextWord)) {
              if (nextWord === endWord) {
                isFinished = true
              }

              if (!map.has(word)) map.set(word, new Set())
              map.get(word).add(nextWord)
              queue.push(nextWord)
              visited.add(nextWord)
            }
          }
        }
      }
      if (isFinished) return
    }
  }

  function dfs(word, endWord, map, path, paths) {
    if (word === endWord) {
      if (path.length > min) return
      else if (path.length === min) {
        paths.push([...path])
      } else if (path.length < min) {
        paths.splice(0, paths.length)
        paths.push([...path])
        min = path.length
      }
      return
    }
    const children = map.get(word)
    for (let child of children) {
      path.push(child)
      dfs(child, endWord, map, path, paths)
      path.pop()
    }
  }
}

function replace(word, index, char) {
  return word.substring(0, index) + char + word.substring(index + 1)
}

function getChar(code) {
  return String.fromCharCode(code)
}
// @lc code=end

findLadders('a', 'c', ['a', 'b', 'c'])
// findLadders('red', 'tax', ['ted', 'tex', 'red', 'tax', 'tad', 'den', 'rex', 'pee'])
