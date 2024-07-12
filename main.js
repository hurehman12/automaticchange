function generateRandomAmountDue() {
    let min = 0; // minimum value
    let max = 1000; // maximum value
    let randomAmount = (Math.random() * (max - min) + min).toFixed(2);
    document.getElementById('amount-due').value = randomAmount;
}

function calculateChange() {
    let amountDue = parseFloat(document.getElementById('amount-due').value);
    let amountReceived = parseFloat(document.getElementById('amount-received').value);

    if (isNaN(amountDue)) {
        alert("Sorry, you need to buy something to receive change.");
        return;
    }
    if (isNaN(amountReceived)) {
        alert("I can't give you change if you don't pay me first bro.");
        return;
    }

    let change = amountReceived - amountDue;
    let difference = amountDue - amountReceived;
    if (amountReceived < amountDue && difference > 0) {
        alert("You don't have enough money! You need $" + difference.toFixed(2) + " more to walk out this store or get shot.");
    }

    let dollars = Math.floor(change);
    change -= dollars;

    let quarters = Math.floor(change / 0.25);
    change -= quarters * 0.25;

    let dimes = Math.floor(change / 0.10);
    change -= dimes * 0.10;

    let nickels = Math.floor(change / 0.05);
    change -= nickels * 0.05;

    let pennies = Math.round(change / 0.01);

    document.getElementById('dollars-output').textContent = "" + dollars;
    document.getElementById('quarters-output').textContent = "" + quarters;
    document.getElementById('dimes-output').textContent = "" + dimes;
    document.getElementById('nickels-output').textContent = "" + nickels;
    document.getElementById('pennies-output').textContent = "" + pennies;

    let totalChange = "Total Change: $" + (amountReceived - amountDue).toFixed(2); 
    document.getElementById('total-output').textContent = totalChange; 
}

document.addEventListener('DOMContentLoaded', generateRandomAmountDue);
