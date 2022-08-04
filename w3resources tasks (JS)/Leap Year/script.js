function yearChecker() {
	let leap;
	let year = document.getElementById("year").value;
	if (year % 400 === 0) {
		leap = "Leap year"}
		else if (year % 100 === 0) {
			leap = "Not a leap year"}
			else if (year % 4 === 0) {
				leap = "Leap year";}
	document.getElementById("content").innerHTML = leap;
}