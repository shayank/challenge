/**
 * Returns the calculation of the term
 * @param {string} term
 * @returns {number}
 */
function lineDrawer(term) {
  let resArr = []
  term = term.replace(/ /g, '');
  // check if x presented
  const xReg = /[.0-9]*x/
  const xRegGlob = /[.0-9]*x/g
  if (term.match(/x/)) {
    for (let i = 0; i < 10; i++) {
      let result = term;
      for (let j = 0; j < term.match(xRegGlob).length; j++) {
        const match = result.match(xReg);
        const res = (match['0'].match(/[.0-9]+/) || 1) * i;
        result = result.replace(xReg, res);
      }
      resArr.push({
        x: i,
        y: calculator(result)
      })
      console.log("resArr", resArr);
    }
  }
  return resArr;
}