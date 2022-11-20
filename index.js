function sumOfString(str) {
	let negative = false;
	let sum = 0;

	for (let i = 0; i < str.length; i++) {
		if (!isNaN(Number(str[i]))) {
			if (negative === true) {
				sum -= Number(str[i]);
			} else {
				sum += Number(str[i]);
			}
			negative = false;
		} else if (str[i] === '-'){
			negative = true;
		} else {
			negative = false;
		}
	}
	return sum;
}

module.exports = sumOfString;
