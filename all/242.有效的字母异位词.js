/*
 * @lc app=leetcode.cn id=242 lang=javascript
 *
 * [242] 有效的字母异位词
 *
 * https://leetcode-cn.com/problems/valid-anagram/description/
 *
 * algorithms
 * Easy (58.91%)
 * Likes:    167
 * Dislikes: 0
 * Total Accepted:    83.6K
 * Total Submissions: 141.7K
 * Testcase Example:  '"anagram"\n"nagaram"'
 *
 * 给定两个字符串 s 和 t ，编写一个函数来判断 t 是否是 s 的字母异位词。
 * 
 * 示例 1:
 * 
 * 输入: s = "anagram", t = "nagaram"
 * 输出: true
 * 
 * 
 * 示例 2:
 * 
 * 输入: s = "rat", t = "car"
 * 输出: false
 * 
 * 说明:
 * 你可以假设字符串只包含小写字母。
 * 
 * 进阶:
 * 如果输入字符串包含 unicode 字符怎么办？你能否调整你的解法来应对这种情况？
 * 
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  // 1. 暴力法，排序
  // return s.split('').sort().join('') === t.split('').sort().join('')
  // 2.哈希表
  const map = new Map()
  for (let i = 0; i < s.length; i++) {
    if (!map.get(s[i])) {
      map.set(s[i], 0)
    }
    map.set(s[i], map.get(s[i]) + 1)
  }
  for (let i = 0; i < t.length; i++) {
    if (!map.get(t[i])) {
      map.set(t[i], 0)
    }
    map.set(t[i], map.get(t[i]) - 1)
  }
  for (let val of map.values()) {
    if (val !== 0) return false
  }
  return true
};
// @lc code=end

// isAnagram("anagram", "nagaram")
