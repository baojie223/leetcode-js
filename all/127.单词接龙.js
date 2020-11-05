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
var ladderLength = function (beginWord, endWord, wordList) {
  if (!wordList.includes(endWord)) return 0

  const n = beginWord.length,
    a = 'a'.charCodeAt(0)
  let count = Infinity

  const index = wordList.indexOf(beginWord)
  if (index !== -1) wordList.splice(index, 1)

  const dfs = (word, list, path = []) => {
    if (word === endWord) {
      count = Math.min(count, path.length + 1)
      return
    }
    let t = '',
      index = -1
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < 26; j++) {
        if (String.fromCharCode(a + j) === word[i]) continue
        t = word.slice(0, i) + String.fromCharCode(a + j) + word.slice(i + 1)
        index = list.indexOf(t)
        if (index !== -1) {
          const removed = list.splice(index, 1)
          path.push(removed[0])
          dfs(t, list, path)
          path.pop()
          list.splice(index, 0, removed[0])
        }
      }
    }
  }

  dfs(beginWord, wordList)

  return count === Infinity ? 0 : count
}
// @lc code=end

ladderLength('qa', 'sq', [
  'si',
  'go',
  'se',
  'cm',
  'so',
  'ph',
  'mt',
  'db',
  'mb',
  'sb',
  'kr',
  'ln',
  'tm',
  'le',
  'av',
  'sm',
  'ar',
  'ci',
  'ca',
  'br',
  'ti',
  'ba',
  'to',
  'ra',
  'fa',
  'yo',
  'ow',
  'sn',
  'ya',
  'cr',
  'po',
  'fe',
  'ho',
  'ma',
  're',
  'or',
  'rn',
  'au',
  'ur',
  'rh',
  'sr',
  'tc',
  'lt',
  'lo',
  'as',
  'fr',
  'nb',
  'yb',
  'if',
  'pb',
  'ge',
  'th',
  'pm',
  'rb',
  'sh',
  'co',
  'ga',
  'li',
  'ha',
  'hz',
  'no',
  'bi',
  'di',
  'hi',
  'qa',
  'pi',
  'os',
  'uh',
  'wm',
  'an',
  'me',
  'mo',
  'na',
  'la',
  'st',
  'er',
  'sc',
  'ne',
  'mn',
  'mi',
  'am',
  'ex',
  'pt',
  'io',
  'be',
  'fm',
  'ta',
  'tb',
  'ni',
  'mr',
  'pa',
  'he',
  'lr',
  'sq',
  'ye',
])
