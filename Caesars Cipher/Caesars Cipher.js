function rot13(str) {
	const alphabet = [
		"A",
		"B",
		"C",
		"D",
		"E",
		"F",
		"G",
		"H",
		"I",
		"J",
		"K",
		"L",
		"M",
		"N",
		"O",
		"P",
		"Q",
		"R",
		"S",
		"T",
		"U",
		"V",
		"W",
		"X",
		"Y",
		"Z",
	];

	let answer = "";

	for (let i = 0; i < str.length; i++) {
		const isALetter = alphabet.includes(str[i]);

		if (!isALetter) {
			answer += str[i];
		} else {
			const charIndex = alphabet.findIndex((c) => c === str[i]);
			answer += alphabet[charIndex + 13] || alphabet[charIndex - 13];
		}
	}

	return answer;
}

function cipherResult() {
	var str = document.getElementById("cipher_input").value;
	if (str === "") {
		alert("Please enter some message.");
	} else {
		var result = rot13(str);
		alert("Decoded message: " + result);
	}
}
