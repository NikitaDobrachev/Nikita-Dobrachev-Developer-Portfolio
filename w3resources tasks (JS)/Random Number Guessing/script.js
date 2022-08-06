function numberVerify() {
  let guessedNumber = Math.ceil(Math.random() * 10)
  let enteredNumber = document.getElementById('number').value
  enteredNumber == guessedNumber
    ? (document.getElementById('content').innerHTML += 'Good Work<br>')
    : (document.getElementById('content').innerHTML += 'Not matched<br>')
}
