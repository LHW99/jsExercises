const caesar = function(word, number) {

let arr = word
		.split('')
		.map(char => char + number)
		.join('');

function getLetter(char, number){
let char = arr.charCodeAt();

}


return arr;
}

module.exports = caesar
