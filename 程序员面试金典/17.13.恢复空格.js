/**
 * @param {string[]} dictionary
 * @param {string} sentence
 * @return {number}
 */
var respace = function (dictionary, sentence) {
  const dp = [];
  dp[0] = 0;
  for (let i = 1; i <= sentence.length; i++) {
    dp[i] = dp[i - 1] + 1;
    for (let j = i; j >= 0; j--) {
      const curr = sentence.substring(j, i);
      if (dictionary.includes(curr)) {
        dp[i] = Math.min(dp[i], dp[j]);
      }
    }
  }
  return dp[sentence.length];
};

respace(['looked', 'just', 'like', 'her', 'brother'], 'jesslookedjustliketimherbrother');
