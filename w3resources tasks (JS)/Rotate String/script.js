function rotateString() {
	let stringData = document.getElementById("content").innerHTML;
	let firstChar = stringData.charAt(0);
	let lastChar = stringData.charAt(stringData.length-1);
	stringData = lastChar + stringData.substring(0, stringData.length-1);
	document.getElementById("content").innerHTML = stringData;
}

let repeat = setInterval(rotateString, 200);