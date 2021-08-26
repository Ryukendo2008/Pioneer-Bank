//login button event handler
const loginButton = document.getElementById('login');
loginButton.addEventListener('click', function () {
    const loginArea = document.getElementById('login-area');
    loginArea.style.display = 'none';
    document.getElementById('trans-area').style.display = 'block';
});

//deposit button event handler
const depositBtn = document.getElementById('deposit-btn');
depositBtn.addEventListener('click', function () {
    const depositNumber = getInputNumber('depositAmount');

    updateSpanText("currentDeposit", depositNumber);
    updateSpanText('currentBalance', depositNumber);

    document.getElementById('depositAmount').value = "";
});

// withdraw button event handler
const withdrawBtn = document.getElementById('withdraw-btn');
withdrawBtn.addEventListener('click', function () {
    const withdrawAmount = getInputNumber('withdrawAmount');

    updateSpanText('currentWithdraw', withdrawAmount);
    updateSpanText('currentBalance', -1 * withdrawAmount);

    document.getElementById('withdrawAmount').value = "";
})

function getInputNumber(id) {
    Amount = document.getElementById(id).value;
    const AmountNumber = parseFloat(Amount);
    return AmountNumber;
}

function updateSpanText(id, depositNumber) {
    const currentBalance = document.getElementById(id).innerText;
    currentBalanceNumber = parseFloat(currentBalance);
    let totalBalance = depositNumber + currentBalanceNumber;
    document.getElementById(id).innerText = totalBalance;
}
