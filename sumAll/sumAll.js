const sumAll = function(x, y) {
	min = x;
	max = y;
	result = 0

	if (min < 0 || max < 0){
		return "ERROR";
	}
	if (typeof min !== "number" || typeof max !== "number"){
		return "ERROR";
	}
	if (min > max){
		let temp = min;
		min = max;
		max = temp;
	}


	for (i = min; i < max+1; i++){
		result += i;
	}

	return result;
}

module.exports = sumAll
