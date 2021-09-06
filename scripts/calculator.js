/**
 * Returns the calculation of the term
 * @param {string} term
 * @returns {number}
 */
function calculator(term) {
  function muldDivCalc(t) {
    const reg = /[-]?[.0-9]+[\*|\/]+[-]?[.0-9]+/;
    if (!t.match(reg)) {
      return t
    }
    let result = t;
    for (let i = 0; i < t.match(/[\*|\/]+/g).length; i++) {
      const match = result.match(reg);
      if (match['0'].lastIndexOf('*') !== -1) {
        const leftNum = match['0'].substr(0, match['0'].lastIndexOf('*'));
        const rightNum = match['0'].substr(match['0'].lastIndexOf('*') + 1);
        const res = parseFloat(leftNum) * parseFloat(rightNum);
        result = result.replace(reg, res);
      } else if (match['0'].lastIndexOf('/') !== -1) {
        const leftNum = match['0'].substr(0, match['0'].lastIndexOf('/'));
        const rightNum = match['0'].substr(match['0'].lastIndexOf('/') + 1);
        const res = parseFloat(leftNum) / parseFloat(rightNum);
        result = result.replace(reg, res);
      }
    }
    return result;
  }
  function plusMinCalc(t) {
    const reg = /[-]?[.0-9]+[\+|\-]+[-]?[.0-9]+/;
    if (!t.match(reg)) {
      return t
    }
    let result = t;
    for (let i = 0; i < t.match(/[.0-9]+/g).length - 1; i++) {
      const match = result.match(reg);
      if (match['0'].lastIndexOf('+') !== -1) {
        const leftNum = match['0'].substr(0, match['0'].lastIndexOf('+'));
        const rightNum = match['0'].substr(match['0'].lastIndexOf('+') + 1);
        const res = parseFloat(leftNum) + parseFloat(rightNum);
        result = result.replace(reg, res);
      } else if (match['0'].lastIndexOf('-') !== -1) {
        const leftNum = match['0'].substr(0, match['0'].lastIndexOf('-'));
        const rightNum = match['0'].substr(match['0'].lastIndexOf('-') + 1);
        const res = parseFloat(leftNum) - parseFloat(rightNum);
        result = result.replace(reg, res);
      }
    }
    return result;
  }
  // remove white spaces
  term = term.replace(/ /g, '');
  let result = term;
  // let's find parentheses and resolve them
  const parenthesesReg = /\(([^)]+)\)/;
  const parenthesesRegGlob = /\(([^)]+)\)/g;
  if (term.match(parenthesesReg)) {
    for (let i = 0; i < term.match(parenthesesRegGlob).length; i++) {
      const match = result.match(parenthesesReg);
      let res = match['1'];
      res = muldDivCalc(res);
      res = plusMinCalc(res);
      result = result.replace(parenthesesReg, res);
    }
  }
  // now we don't have parentheses any more
  result = muldDivCalc(result);
  result = plusMinCalc(result);
  // check Infinity
  if (result.indexOf('Infinity') !== -1) {
    return Infinity;
  } else {
    return parseFloat(parseFloat(result).toFixed(2));
  }
}

if (typeof module !== "undefined" && module !== null) {
  module.exports = calculator
}