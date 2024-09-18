/**
 * Return an array of pairs of numbers that sum to N
 * @param {Array} A an array of numbers
 * @param {Number} N an integer value
 */
function sumPairs(A, N) {
  let numbersMap = new Map();
  let pairsSet = new Set();

  for (let index = 0; index < A.length; index++) {
    numbersMap.set(A[index], true);
  }

  for (let index = 0; index < A.length; index++) {
    const pair = A[index];
    const diff = N - pair;

    if (
      pair !== diff &&
      numbersMap.has(diff) &&
      !pairsSet.has(`${diff},${pair}`)
    ) {
      pairsSet.add(`${pair},${diff}`);
    }
  }

  let result = [];
  for (let pair of pairsSet) {
    let [first, second] = pair.split(",").map(Number);
    result.push([first, second]);
  }

  return result;
}

module.exports = sumPairs;
