const ftoc = function(far) {
let goC = (far - 32) * (5 / 9);
return parseFloat(goC.toFixed(1));
}

const ctof = function(cel) {
let goF = (cel * 9 / 5) + 32;
return parseFloat(goF.toFixed(1));
}

module.exports = {
  ftoc,
  ctof
}
