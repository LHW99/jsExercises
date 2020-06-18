const fibonacci = function(which) {

let fibo = [0, 1]
let conv = parseInt(which);

for (i = 1; i < conv; i++){
	num = fibo[i] + fibo[i - 1]
	fibo.push(num);
}
return (which > 0 ? fibo[conv] : "OOPS")
}

module.exports = fibonacci
