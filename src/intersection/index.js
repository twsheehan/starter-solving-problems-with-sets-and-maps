/**
 * Return an array of unique elements that are contained in both arrays a, and b
 * @param {Array} a
 * @param {Array} b
 */
function intersection(a, b) {
  let aMap = new Map();
  let result = [];

  for (let index = 0; index < a.length; index++) {
    const n = a[index];
    if (aMap.has(n)) {
      const counter = aMap.get(n);
      aMap.set(n, counter + 1);
    } else {
      aMap.set(n, 1);
    }
  }

  let bSet = new Set(b);
  for (let value of bSet.values()) {
    if (aMap.has(value)) {
      result.push(value);
    }
  }

  return result;
}

module.exports = intersection;
