// const removeFromArray = function(array, arguments) {
//	let args = array.indexOf(arguments);
//	if (args > -1){
//	array.splice(args, 1);
//	}
//
//return array;
// }



const removeFromArray = function(...arguments){
	let array = arguments[0];
	return array.filter(val=>!arguments.includes(val))

}

module.exports = removeFromArray