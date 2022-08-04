function currentDate() {
	let date = new Date();
	let year = date.getFullYear();
	let dateFormatted;
	if (date.getDate() < 10) {
		dateFormatted = `0${date.getDate()}`
	} else {
			dateFormatted = date.getDate();
		}
	let monthFormatted;
	if (date.getMonth() < 10) {
		monthFormatted = `0${date.getMonth()}`
	} else {
			monthFormatted = date.getMonth();
		}
	let dateOutput = `${dateFormatted}/${monthFormatted}/${date.getFullYear()}`;
	document.getElementById("content").innerHTML = dateOutput;
}