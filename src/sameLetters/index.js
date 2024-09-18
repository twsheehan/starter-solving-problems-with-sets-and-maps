/**
 * return a Map of the unique letters and arrays of words that are made up of those letters
 * @param {array} words An array  of words
 */
function sameLetters(words) {
  let resultsMap = new Map();

  for (let index = 0; index < words.length; index++) {
    const word = words[index].toLowerCase();
    const wordSet = new Set(word);
    const wordCharArray = [...wordSet].sort((a, b) => a.localeCompare(b));
    const wordKey = wordCharArray.join("");

    if (resultsMap.has(wordKey)) {
      let keyWords = resultsMap.get(wordKey);
      keyWords.push(word);
      resultsMap.set(wordKey, keyWords);
    } else {
      resultsMap.set(wordKey, [word]);
    }
  }

  return resultsMap;
}

module.exports = sameLetters;
