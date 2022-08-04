function yearChecker() {	
	document.getElementById("content").innerHTML = '';
	for (let year = 2014; year <= 2050; year += 1) {
		let yearInfo = new Date(year, 0, 1);
		if (yearInfo.getDay() === 0) {document.getElementById("content").innerHTML += `${yearInfo.getFullYear()}<br>`}
	}
}