const rateAddress = window.location.href;

const rate = rateAddress[rateAddress.length - 13];

document.getElementById('rateMessageText').innerHTML = `You selected ${rate} out of 5`;