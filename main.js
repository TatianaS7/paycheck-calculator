let paycheckForm = document.getElementById("paycheck-form");
let payRate = document.getElementById("pay-rate");
let hoursWorked = document.getElementById("hours-worked");
let yourPay = document.getElementById("your-pay");


function calculatePay(event) { //hourly pay function
    event.preventDefault()
    let hours = Number(hoursWorked.value);
    let rate = Number(payRate.value);

    let pay = hours * rate;

    let message = `Your paycheck will be $${pay}!`;
    yourPay.innerHTML = message;
}

paycheckForm.onsubmit = calculatePay;

function salaryPay(event) { //salary pay function
    event.preventDefault()


    
    let message = `Your paycheck will be $${pay}!`;
    yourPay.innerHTML = message;


}