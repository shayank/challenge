
/**
 * Sort the number the way Peter likes
 * @param {number} number
 * @returns {number}
 */
function peterAlgorithm(number) {
  const givenNum = number + '';
  const givenArr = givenNum.split("");
  const sortedArr = [...givenArr].sort();
  const givenSorted = sortedArr.join("");
  if (givenNum === givenSorted) {
    return number;
  }
  let peterNum = ''
  const min = sortedArr[0];
  for (let i = 0; i < givenArr.length; i++) {
    if (min < givenArr[i]) {
      peterNum += min
      for (let j = 0; j < givenArr.length - i - 1; j++) {
        peterNum += '9'
      }
      break;
    } else {
      peterNum += givenArr[i]
    }
  }
  return parseInt(peterNum);
}

if (typeof module !== "undefined" && module !== null) {
  module.exports = peterAlgorithm
}