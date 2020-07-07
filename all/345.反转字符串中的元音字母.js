/*
 * @lc app=leetcode.cn id=345 lang=javascript
 *
 * [345] 反转字符串中的元音字母
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
  // solution no.1 正则
  let list = []
  s.replace(/[aeiou]{1}/ig, match => {
    list.push(match)
    return match
  })
  const str = s.replace(/[aeiou]{1}/ig, () => {
    return list.pop()
  })
  return str

  // solution no.2 双指针 极度缓慢
  // let i = 0
  // let j = s.length - 1
  // const list = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']
  // while (i < j) {
  //   if (!list.includes(s[i])) {
  //     i++
  //     continue
  //   }
  //   if (!list.includes(s[j])) {
  //     j--
  //     continue
  //   }
  //   s = s.substring(0, i) + s[j] + s.substring(i + 1, j) + s[i] + s.substring(j + 1)
  //   i++
  //   j--
  // }
  // return s
}
// @lc code=end
