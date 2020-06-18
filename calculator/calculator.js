function add (x,y) {
	ad = x + y;
	return ad;
}

function subtract (x,y) {
	sub = x - y;
	return sub;
}

function sum (array) {
	return array.reduce((current, total) => current + total, 0)
}

function multiply (array) {
	return array.length
		? array.reduce((accumulator, nextItem) => accumulator * nextItem)
		: 0;
}

function power(base, exponent) {
	return Math.pow(base, exponent)
}

function factorial(factor) {
	let total = 1;
	if (factor > 1){
	for (i = factor, i > 0, i--){
		total *= factor; 
		}
		return total;
	}
	else if (factor === 0 || factor === 1){
		return 1;
	}
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}