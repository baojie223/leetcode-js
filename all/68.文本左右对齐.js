/*
 * @lc app=leetcode.cn id=68 lang=javascript
 *
 * [68] 文本左右对齐
 */

// @lc code=start
/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
var fullJustify = function (words, maxWidth) {
  const result = []

  // 因为单词之间必有空格, 所以在每个单词后面加一个空格, 最大长度也相应加一
  words = words.map((word) => word + ' ')
  maxWidth += 1

  // 遍历每个单词, 每次循环都先计算当前单词加入后的长度, 
  // 如果长度超出, 则进入helper函数, 返回处理后的字符串, 推入result中
  let tmp = [],
    width = 0
  for (let word of words) {
    width += word.length
    if (width > maxWidth) {
      result.push(helper(tmp, maxWidth))
      tmp = []
      width = word.length
    }
    tmp.push(word)
  }

  // 最后一行单独处理, 只需要在单词拼接后补足所需的空格即可
  let lastOne = tmp.join('').trim()
  lastOne += ' '.repeat(maxWidth - lastOne.length - 1)
  result.push(lastOne)

  return result
}

function helper(words, maxWidth) {
  const n = words.length

  // 长度为1时单独处理, 只需在word后补足空格即可返回
  if (n === 1) {
    let w = words[0].trim()
    w += ' '.repeat(maxWidth - w.length - 1)
    return w
  }

  // 长度不为1时, 先计算words的总长度, 
  // 然后根据maxWidth, 循环对每一个word的后面补上空格(words中的最后一个word除外)
  // 当 width = maxWidth 时, 就可以返回了
  let width = 0
  for (let word of words) width += word.length
  let i = 0
  while (width < maxWidth) {
    words[i++ % (n - 1)] += ' '
    width++
  }
  return words.join('').trim()
}
// @lc code=end

fullJustify(
  [
    'ask',
    'not',
    'what',
    'your',
    'country',
    'can',
    'do',
    'for',
    'you',
    'ask',
    'what',
    'you',
    'can',
    'do',
    'for',
    'your',
    'country',
  ],
  16
)
