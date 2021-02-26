function telephoneCheck(str) {
	const regex = /^1? ?(( ?\d{3}[- ]*)|(\( ?\d{3}[- ]*\) *))\d{3}[- ]?\d{4}$/;

	return regex.test(str);
}

function numberResult() {
	var str = document.getElementById("number").value;
	if (str === "") {
		alert("Please enter some number.");
	} else {
		var result = telephoneCheck(str);
		if (result === true) {
			alert("Your number is valid.");
		} else {
			alert("Your number is invalid.");
		}
	}
}
