const leapYears = function(year) {
	let x = year % 4;
	let y = year % 100;
	let z = year % 400
	if (x !== 0) return false;
	
	if (x === 0 && y !== 0) return true;

	if (x === 0 && y === 0 && z !== 0) return false;

	if (x === 0 && y === 0 && z === 0) return true;
	
	return leapYears;
}


module.exports = leapYears

// the following is the clean version on the website

// var leapYears = function(year){
//	return year % 4 === 0 && 
//	(year % 100 !== 0 || year % 400 == 0)
//}
