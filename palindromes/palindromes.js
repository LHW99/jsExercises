const palindromes = function(string) {
	x = string
	.replace("/\s/g", "")
	.toLowerCase()
	.replace(/`~!@#$%^&*()[]{}'";:<>?.,'/g, "");

	rev = x.split("").reverse().join("");

	return (x == rev);

module.exports = palindromes
