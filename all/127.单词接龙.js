/*
 * @lc app=leetcode.cn id=127 lang=javascript
 *
 * [127] 单词接龙
 */

// @lc code=start
/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
// 双向BFS, 效率极高
var ladderLength = function (beginWord, endWord, wordList) {
  const wordSet = new Set(wordList)
  if (!wordSet.has(endWord)) return 0
  wordSet.delete(beginWord)

  let beginSet = new Set([beginWord]),
    endSet = new Set([endWord]),
    visited = new Set()
  let step = 1
  while (beginSet.size && endSet.size) {
    if (endSet.size < beginSet.size) {
      const temp = beginSet
      beginSet = endSet
      endSet = temp
    }

    const newSet = new Set()
    for (let word of beginSet) {
      if (judge(word, wordSet, endSet, newSet, visited)) return step + 1
    }
    beginSet = newSet
    step++
  }
  return 0
}

function judge(word, wordSet, endSet, newSet, visited) {
  visited.add(word)
  const a = 'a'.charCodeAt(0)
  for (let i = 0; i < word.length; i++) {
    for (let j = 0; j < 26; j++) {
      const newChar = getChar(a + j)
      if (newChar === word[i]) continue
      const newWord = replace(word, i, newChar)
      if (wordSet.has(newWord)) {
        if (endSet.has(newWord)) return true
        if (!visited.has(newWord)) {
          newSet.add(newWord)
        }
      }
    }
  }
  return false
}

function replace(string, index, char) {
  return string.substring(0, index) + char + string.substring(index + 1)
}

function getChar(code) {
  return String.fromCharCode(code)
}

// BFS
// var ladderLength = function (beginWord, endWord, wordList) {
//   const wordSet = new Set(wordList)
//   if (!wordSet.has(endWord)) return 0
//   wordSet.delete(beginWord)

//   const queue = [beginWord],
//     visited = []
//   let step = 1
//   while (queue.length) {
//     const len = queue.length
//     for (let i = 0; i < len; i++) {
//       const word = queue.shift()
//       if (visited.includes(word)) continue
//       if (judge(word, wordSet, endWord, queue, visited)) return step + 1
//     }
//     step++
//   }
//   return 0
// }

// function judge(word, wordSet, endWord, queue, visited) {
//   visited.push(word)
//   const a = 'a'.charCodeAt(0)
//   for (let i = 0; i < word.length; i++) {
//     for (let j = 0; j < 26; j++) {
//       const newChar = getChar(a + j)
//       if (newChar === word[i]) continue
//       const newWord = replace(word, i, newChar)
//       if (newWord === endWord) return true
//       if (wordSet.has(newWord) && !visited.includes(newWord)) {
//         queue.push(newWord)
//       }
//     }
//   }
//   return false
// }

// function replace(string, index, char) {
//   return string.substring(0, index) + char + string.substring(index + 1)
// }

// function getChar(code) {
//   return String.fromCharCode(code)
// }
// @lc code=end

ladderLength('hit', 'cog', ['hot', 'dot', 'dog', 'lot', 'log', 'cog'])
